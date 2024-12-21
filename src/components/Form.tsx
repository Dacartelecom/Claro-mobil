import { type ChangeEvent, type FC, useState } from "react";
import type { FormProps } from "../interfaces/Form.props";
import Modal from "./Modal/Modal";
import axios from "axios";

export const Form: FC<FormProps> = ({
  children,
  modal,
  className
}) => {
  const params = new URLSearchParams(window.location.search);

  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
  const [response, setResponse] = useState<null | string>(null);
  const [inputState, setInputState] = useState<string>('');
  const [Gclid] = useState(params.get('gclid'));
  const [isChecked, setIsChecked] = useState(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activeModalForm, setActiveModalForm] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((_prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
    setLength(value.length);
  };

  const interval = (error: string) => {
    setResponse(error)
    setTimeout(() => {
      setResponse('')
    }, 3000);
  }

  const callMeNumber = async (number: string) => { 
    try {
      const res = await axios.post('https://develzpbx.com:4004/call-me',{
        number
      },{
        headers: {
          "X-URL-Complete": window.location.href
        }
      });
      console.log(res)
      setInputState(() => (''));
      interval('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
      setLoading(false);
    } catch (error) {
      interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
      setLoading(false);
      console.log(error)
    };
  };

  const sendNumber = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://ws-dacar-ica.octopus-latam.com/?";
    const data = new URLSearchParams();
    let service = 'PeruHfcCallme'

    if (inputState.trim()) callMeNumber(inputState);

    const params = new URLSearchParams(window.location.search);
    const TSource = params.get('T-source');

    if (TSource) {
      switch (TSource) {
        case '01claromovil':
          data.append("service", "callmeClaroMovilPeru");
          data.append("username", "dacarEs");
          data.append("password", "3Dxwii9qvuC8TXeRG28psQ");
          data.append("tsource", TSource);
          break;

        case '02claro':
          data.append("service", "callmeClaroMovilPeru2");
          data.append("username", "dacarEs");
          data.append("password", "3Dxwii9qvuC8TXeRG28psQ");
          data.append("tsource", TSource);
          break;

        default:
          data.append("service", "callmeClaroGenerico");
          data.append("username", "dacarEs");
          data.append("password", "3Dxwii9qvuC8TXeRG28psQ");
          data.append("tsource", "");
          break;
      };
    } else {
      data.append("service", "callmeClaroGenerico");
      data.append("username", "dacarEs");
      data.append("password", "3Dxwii9qvuC8TXeRG28psQ");
      data.append("tsource", "");
    }
    data.append("telephone", inputState);

    Gclid ? data.append("gclid", Gclid) : data.append("gclid", "");

    data.append("ip", "127.0.0.1");

    const lead = url + data.toString();

    // fetch(lead)
    //   .then((res) => res.json())
    //   .catch((error) => console.log(error))
    //   .then((response) => {
    //     console.log(response)
    //     console.log(lead)
    //     if (response.status === 'ERROR') {
    //       interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
    //       setLoading(false);
    //     } else {
    //       interval('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
    //       setLoading(false);
    //     }
    //     setInputState(() => (''));
    //     console.log(service);

    //   });
  }

  return (
    <form className={`flex flex-col w-[450px] ${response? 'h-[500px]': 'h-[420px]'}  justify-start rounded-md sombra text-[#B7202E] ${modal ? 'top-[100px] right-[5%] max-lg:top-[10px] max-lg:right-0' : ''}  text-[#222222] ${ className } max-md:w-[420px]`} onSubmit={sendNumber}>
    <div className="w-full bg-[#B7202E] h-[40px] flex justify-center items-center text-white p-[10px] rounded-t-lg font-bold"> 
        <span>¡Pregunta por la Oferta del mes!</span>    
    </div>
    <div className="w-full bg-white h-[420px] flex flex-col text-center text-[24px] font-bold gap-[20px] rounded-b-lg p-[15px]"> 
        {children}
        <div className="flex w-full flex-col gap-[15px]">
            <span className="text-[17px] text-left text-black">Déjanos tu número y te llamaremos</span>
            
            <input type="text" className=" border  rounded-md border-[#949494a1] p-2"
            placeholder="987654321"
            pattern="[0-9]{1,9}"
            maxLength={9}
            value={inputState}
            onChange={changeNumber}
            />
            
            <span className="text-[17px] text-left flex gap-[5px] text-black">
                <input type="checkbox" 
                checked={isChecked}
                onChange={handleCheckboxChange} 
                />
                <span>Acepto los <span onClick={() => setActiveModal(true)} className="cursor-pointer" >Términos y Condiciones</span></span>
            </span>
            {response &&  <span className="py-3"> {response}</span>}
            <button className={`border rounded-md w-[95%] m-auto text-white py-[5px] flex items-center justify-between px-[20px] ${length === 9 && isChecked === true ?'boton-llamar':'boton-llamar-inactive'}`}
            type='submit'
            disabled={length === 9 && isChecked === true ? false : true}
            >
                <span>¡Solicitar llamada! {loading && <span className="loader"></span>} </span>
                <span className="phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-6">
                    <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                </span>
            </button>
        </div>
    </div>
          <Modal
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            background="#fff"
            buttonEnd
            >
              <>
                <h6 className="text-3xl text-start font-bold w-full mb-4">Términos y condiciones</h6>
                  <ul className="text-justify text-gray-500 [&>li]:mb-1">
                    <li><span>
                      El presente documento establece los términos y condiciones generales (en adelante, los “Términos
                      y Condiciones”) aplicables al uso del <span className="text-gray-800">sitio web</span>  <span className="text-[#B7202E]"> planesmoviles.com.pe</span> puesto
                      a disposición del público en general (en adelante, indistintamente, el “Usuario” o los “Usuarios”) por parte
                      de TELETALK S.A.C (en adelante, la “Empresa”) para la comercialización de productos y
                      servicios prestados por América Móvil Perú S.A.C. (en adelante, “CLARO”). El Usuario que desee usar el Sitio
                      podrá hacerlo sujetándose a los Términos y Condiciones. LOS PRESENTES TÉRMINOS Y CONDICIONES
                      TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, POR LO QUE CUALQUIER USUARIO QUE NO ACEPTE
                      ESTOS TÉRMINOS Y CONDICIONES DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO.
                      El Usuario debe leer todas las condiciones establecidas en estos Términos y Condiciones, así como en los
                      demás documentos incorporados en el Sitio previo al uso del Sitio.
                      La aceptación expresa de los Términos y Condiciones que se establecen a continuación y/o el mero uso del
                      Sitio que haga el Usuario, implica que el Usuario declara haber sido previamente informado de, así como
                      haber leído, comprendido y aceptado, estos Términos y Condiciones, así como las condiciones
                      particulares o modificaciones que respecto de ellas se puedan efectuar, a todas las cuales el Usuario se
                      adhiere plenamente y sin reservas.
                    </span></li>
                    <li><span>
                      El Usuario declara y garantiza estar apto y tener capacidad legal para aceptar los presentes Términos y
                      Condiciones y que toda la información que proporcione a la Empresa en el marco del Sitio, bajo cualquier
                      forma, será exacta, verdadera, completa y correcta; liberando de cualquier responsabilidad sobre el
                      particular a la Empresa y a CLARO. En ese sentido, para efectos de las exoneraciones de responsabilidad,
                      CLARO comprende también a cualquiera de sus respectivos directores, funcionarios, empleados u otros
                      representantes.
                    </span></li>
                    <li><span className="text-gray-800">
                      1.Responsabilidad limitada
                    </span></li>
                    <li>
                      <span>El Usuario declara haber comprendido y aceptado que toda información, comunicación, opinión,
                        manifestación, contenido, transacción u operación a la que acceda a través del Sitio es de exclusiva
                        responsabilidad de la Empresa; reconociendo el Usuario que el uso del Sitio y la confianza que asigne al
                        mismo son bajo su propio riesgo.En ese sentido, el Usuario declara haber comprendido y aceptado que, por
                        ser el Sitio un espacio de propiedad de la Empresa y administrado exclusivamente por ella, CLARO no
                        respalda ni garantiza la información, comunicaciones, opiniones, manifestaciones, contenido,
                        transacciones u operaciones a las que el Usuario acceda a través del Sitio; por lo cual el Usuario libera de
                        cualquier responsabilidad sobre el particular a CLARO.</span>
                    </li>
                    <li><span className="text-gray-800">
                      2.Limitaciones y modificación de las condiciones aplicables al Sitio
                    </span></li>
                    <li>
                      <span>La Empresa expresamente se reserva la facultad y puede efectuar, en cualquier momento, bajo su
                        exclusiva discreción y sin previo aviso, modificaciones sobre estos Términos y Condiciones. Las
                        modificaciones entrarán en vigor inmediatamente después de que aparezcan publicadas por cualquier
                        medio, sin necesidad de notificación alguna al Usuario. En los casos en que la Empresa estime conveniente
                        realizar alguna notificación, ésta se efectuará por cualquier medio incluyendo, sin limitaciones, anotación
                        en el sitio web <span className="text-[#B7202E]">www.sitiodistribuidor.com</span>, correo electrónico u otros mecanismos electrónicos o
                        convencionales de correos o comunicaciones, o cualquier otro método equivalente. Es recomendable que
                        el Usuario revise en forma periódica el Sitio a fin de informarse de las modificaciones que puedan haberse
                        introducido; la continuación en el uso del Sitio, implicará la aceptación sin reservas a dichas modificaciones
                        por parte del Usuario.</span>
                    </li>
                    <li><span className="text-gray-800">
                      3.Suspensión
                    </span></li>
                    <li>
                      <span>La Empresa se reserva el derecho de suspender en cualquier momento, temporalmente y sin previo aviso, el
                        Sitio, por el tiempo que resulte necesario. Ello incluye la eventual necesidad de efectuar operaciones de
                        mantenimiento, reparación, actualización o mejora de las mismas o causas similares.</span>
                    </li>
                    <li><span className="text-gray-800">
                      4.Fuerza mayor
                    </span></li>
                    <li>
                      <span>La Empresa no garantiza la inexistencia de interrupciones o errores en el acceso al Sitio, ni será
                        responsable de los retrasos o fallos que se produjeran en el acceso, funcionamiento y operatividad del
                        Sitio, sus servicios y/o contenidos, así como tampoco de las interrupciones, suspensiones o el mal
                        funcionamiento del mismo, cuando tuvieren su origen en fallas producidas por causas ajenas a su voluntad
                        o fuera de su control o por cualquier otra situación de caso fortuito o fuerza mayor. </span>
                    </li>
                    <li><span className="text-gray-800">
                      5.Derechos de autor y marca
                    </span></li>
                    <li>
                      <span>Todos los contenidos, marcas, textos e imágenes gráficas de este Sitio están sujetos a los derechos de la
                        Empresa, y en lo que corresponda, a los derechos de CLARO, protegidos por las leyes de la propiedad
                        intelectual e industrial y derechos de autor. En ningún caso el acceso a este Sitio implica ningún tipo de
                        renuncia, transmisión o cesión total ni parcial de dichos derechos, ni confiere ningún derecho de utilización,
                        alteración, explotación, reproducción, distribución o comunicación pública sobre dichos contenidos sin la
                        previa y expresa autorización específicamente otorgada a tal efecto por parte de la Empresa o de CLARO o
                        del tercero titular de los derechos afectados. En función de lo anterior y sin perjuicio de las demás
                        obligaciones que emanan del reconocimiento de los derechos de la Empresa o de CLARO protegidos por las
                        leyes de la propiedad intelectual e industrial y derechos de autor, el Usuario está prohibido de transmitir,
                        distribuir, reproducir, publicitar bajo cualquier modalidad o en general utilizar los contenidos, marcas, textos
                        e imágenes gráficas de este Sitio para fines comerciales; modificar o utilizar la información sin la
                        autorización previa, expresa y escrita de la Empresa o CLARO; o, transferir los contenidos, marcas, textos e
                        imágenes gráficas de este Sitio a terceros, salvo que se advierta a dichos terceros de manera expresa
                        respecto de la titularidad de la Empresa o CLARO de los derechos de autor y las limitaciones impuestas al
                        uso de dichos contenidos, marcas, textos o imágenes gráficas. Las prohibiciones antes mencionadas son a
                        título enunciativo y no taxativo, por lo que se extenderán a todas aquellas que se deriven del respeto y
                        reconocimiento de los derechos de la Empresa o de Claro protegidos por las leyes de la propiedad
                        intelectual e industrial y derechos de autor.</span>
                    </li>
                    <li><span className="text-gray-800">
                      6. Uso del sitio bajo responsabilidad
                    </span></li>
                    <li>
                      <span>El uso de este Sitio o de cualquier área del mismo o de todo o parte de la información o contenidos
                        incorporados en el mismo, o el solicitar cualquier producto o servicio mediante este Sitio, o el aprobar
                        cualquier material o información, se hace bajo la única y exclusiva responsabilidad del Usuario que accede
                        al mismo. La Empresa no garantiza que el uso del Sitio será ininterrumpido y sin posibilidad de errores. La
                        Empresa no asume responsabilidad alguna derivada de los contenidos de los enlaces de terceros que se
                        puedan encontrar en el Sitio, ni garantiza la ausencia de virus u otros elementos en los mismos que puedan
                        producir alteraciones o daños en el sistema informático del Usuario (hardware y/o software) o sus archivos
                        o ficheros.</span>
                    </li>
                    <li><span className="text-gray-800">
                      7. Vigencia, interrupción y terminación del Sitio
                    </span></li>
                    <li>
                      <span>El Sitio estará disponible por tiempo indefinido. La Empresa en cualquier momento, sin previo aviso, podrá
                        interrumpir, desactivar, denegar, bloquear, dar por terminado el acceso o cancelar, en todo o parte, el Sitio,
                        por cualquier razón, incluyendo, sin limitación, la detección de cualquier tipo de acto u omisión que, a juicio
                        y a sola discreción de la Empresa, se considere como una violación a estos Términos y Condiciones, a otras
                        condiciones aplicables o a las que emanen de la normativa vigente, sin que ello genere para La Empresa
                        responsabilidad de clase alguna.
                        La Empresa no asumirá responsabilidad alguna frente al Usuario o frente a terceros por ninguna de las
                        acciones antes mencionadas. Ni la interrupción, desactivación, denegación, bloqueo, terminación del
                        acceso, desactivación del Sitio ni cualquier acción u omisión del Usuario implicará la pérdida de vigencia de
                        estos Términos y Condiciones.
                      </span>
                    </li>
                    <li><span className="text-gray-800">
                      8. Interpretación
                    </span></li>
                    <li>
                      <span>Los títulos de las cláusulas o numerales son meramente orientadores y no forman parte del contenido
                        preceptivo de estos Términos y Condiciones. Los términos y condiciones que integran los presentes
                        Términos y Condiciones constituyen la expresión formal y definitiva de la declaración de voluntad de las
                        partes, debiendo interpretarse los unos por los otros atribuyendo a los dudosos el sentido que se derive del
                        conjunto de todos. La eventual nulidad o ineficacia de algunas de las estipulaciones, no afecta ni invalida la
                        eficacia u obligatoriedad de las demás contenidas en los presentes Términos y Condiciones. Cualesquiera
                        documentos o declaraciones previos a la entrada en vigor de los presentes Términos y Condiciones se
                        considerarán definitivamente derogados.</span>
                    </li>
                    <li><span className="text-gray-800">
                      9. Competencia
                    </span></li>
                    <li>
                      <span>Todas las cuestiones relacionadas al uso del Sitio se rigen por las leyes peruanas. La Empresa y el Usuario
                        hacen renuncia expresa a cualquier otro fuero y convienen que cualquier controversia derivada de su uso o
                        aplicación será sometida a la jurisdicción de los Juzgados y Tribunales competentes de Lima, Perú. En el
                        caso de que el Usuario tenga su domicilio fuera de Perú, la Empresa y el Usuario se someten, con renuncia
                        expresa a cualquier otro fuero, a los juzgados y tribunales competentes de Lima, Perú.</span>
                    </li>
                  </ul>
              </> 
          </Modal>
      </form>
  )
}
