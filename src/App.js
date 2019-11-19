import React, { Component } from "react";
import './App.scss';
import img from './assets/Ilustración.png';
import YouTubeContainer from './YoutubeContainer';
import firebase from './firebase';
import Chatbox from './Chatbox';

export default class TransmisionWellness extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoId:'2g811Eo7K8U',
      data: [],
      message: '',
    }
  }

  handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.message !== ''){
			firebase.firestore().collection("usuarios").add({
				message: this.state.message,
				user: 'mahali',
				date: new Date().getTime()
			})
			.then(function() {
				console.log("Se agrega documento");
			})
			.catch(function(error) {
				console.error("No se agrega documento ", error);
			});
			this.setState({message: ''});
		}
	}
  
  componentDidMount() {
    firebase.firestore().collection('usuarios').orderBy('date','desc').onSnapshot((querySnapshot) => {
			let chats = [];
			querySnapshot.forEach((doc) => {
				chats.push(doc.data());
			});
			this.setState({data: chats}, () => {console.log(this.state.data)})
    });
    
  }

  render() {
    return (
      <>
        <div className="transmission-wellness">
            <div className="first-section">
              <div className=" container-inscripcion">
                <div className="text-container">
                  <div className="first-width">
                    <h2 className="title-principal">Bienvenido a nuestra<span class="span-title"> primera Charla Live</span></h2>
                    <div className="first-margin">
                      <p className="text">Creando objetivos poderosos por <b>Majo Desmaison</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="second-section">
            <div className=" container-inscripcion">
            <div className="text-container ">
            {this.state.videoId !== '' ? 
            <YouTubeContainer videoId={this.state.videoId}/> : 
            <>
              <div className="video">
                <div className="text-video">
                  <p className="letter-video">En pocos minutos comenzará <b>la transmisión en vivo</b></p>
                </div>
              </div>
              <img src={img} alt="img-majo" className="img-majo"/>
              </>
            }
            </div> 

              <div className="form-container">
                <div className="comments">
                  <div className="text subtitle-text">
                    <p> Comparte tus <b>comentarios</b></p> 
                    <div className="border">
                    {this.state.data.length === 0 ? 
                      <>
                      <div className="special-case">
                      <div className="small-picture"></div>
                      <div className="big-picture"></div>
                    </div>
                    <div>
                      <div className="small-picture"></div>
                      <div className="big-picture"></div>
                    </div>
                    <div>
                      <div className="small-picture"></div>
                      <div className="big-picture"></div>
                    </div>
                    <div>
                      <div className="small-picture"></div>
                      <div className="big-picture"></div>
                    </div>
                    <div className="second-special-case">
                      <div className="small-picture"></div>
                      <div className="big-picture"></div>
                    </div>
                    </>
                    :
                    <Chatbox data={this.state.data}/>
                    }
                  </div>
                </div>
                <div className="main-comment">
                <form onSubmit={this.handleSubmit}>
							    <input type="text" name="message" id="message" className="input-comment" value={this.state.message} onChange={this.handleChange} placeholder='Escribe un comentario...' />
						    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
};

