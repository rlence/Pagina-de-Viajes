import React from 'react';
import './footer.scss';
import IconNav from './iconNav.jsx';


function Footer(props) {

       return (

              <div className="Footer">
                     <div className="contenido">
                            <div className="colum1">
                                   <h2>¿Necesitas Ayuda?</h2>
                                   
                                   <h4>0264 123 4567</h4>
                                   <h4>ricardolence@travel.com</h4>
                                   <p>Lun-Vie.: 9:30 - 19:00  Sab: 10:00 - 14:00 </p>
                                   
                            </div>

                            <div className="colum2">
                                   <h2>Informacion</h2>
                                   <h4>Quienes somos</h4>
                                   <h4>Preguntas frecuentes</h4>
                                   <h4>Politica de privacidad</h4>
                                   <h4>Condiciones generales</h4>
                                   <h4>Aviso Legal</h4>
                                   <h4>Contacto</h4>
                                   <h4>Programa de puntos</h4>
                            </div>

                            <div className="colum3">
                                   <h2>SUBSCRIBETE AL NEWSLESTER</h2>
                                   <input type="email" placeholder="correo electronico" />

                                   <div className="redeSociales">
                                          <IconNav />
                                   </div>
                            </div>
                     </div>
                     <hr></hr>
                     <div className="copyright">
                            <p> Lence Travels 2019 Todos los derechos reservados</p>
                     </div>
              </div>
       )

};


export default Footer;