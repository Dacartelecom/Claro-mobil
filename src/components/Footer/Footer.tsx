'use client'
import ClaroLogoWhite from "../../../public/img/logo-claro-blanco.webp"
import DyCLogoWhite from "../../../public/img/logo-d-y-c.webp"
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal"; 


export const Footer = () => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

  let component;
  if (nombreDelDominio.includes("clarofertas")) {
    component=(
      <>
      
      </>
    )
  }else{
    component=(
    <>
    <span className="cursor-pointer" onClick={ () => setActiveModalTerms(true) }>Términos y Condiciones de la Web</span>
    <span className="cursor-pointer" onClick={ () => setActiveModalPolicy(true) }>Políticas de privacidad</span>
    </>
    )
  }

  let Logo;
  if (nombreDelDominio.includes("clarofertas")) {
    Logo=(
      <>
          <div className="w-[250px]">
            <img
              src={ `${ClaroLogoWhite.src}` }
              alt={ 'Logo D y C' }
              width={ 120 }
              height={ 120 }
              className="w-full h-auto"
            />
          </div>
      </>
    )
  }else{
    Logo=(
    <>
          <div className="w-36 h-36">
            <img
              src={ `${DyCLogoWhite.src}` }
              alt={ 'Logo D y C' }
              width={ 120 }
              height={ 120 }
              className="w-full h-auto"
            />
          </div>
    </>
    )
  }


  const [activeModalTerms, setActiveModalTerms] = useState<boolean>(false);
  const [activeModalPolicy, setActiveModalPolicy] = useState<boolean>(false);
  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '016805993',
    num: '(01) 6805993'
  });
  const [TSource] = useState(params.get('T-source'));

  useEffect(() => {
    if (nombreDelDominio.includes("clarofertas")) {
      if (TSource){
        switch(TSource){
          case 'ext':
            setNumber({
              tel: '016806465',
              num: '(01) 6806465'
            });
            break;

          case 'ext_1':
            setNumber({
              tel: '016806268',
              num: '(01) 6806268'
            });
            break;

          case 'ext_2':
            setNumber({
              tel: '016806466',
              num: '(01) 6806466'
            });
            break;

          case 'ext_3':
            setNumber({
              tel: '6806269',
              num: '(01) 6806269'
            });
            break;
        }
      } else {
        if (pathname.includes('planes-moviles')){
          setNumber({
            tel: '016806465',
            num: '(01) 6806465'
          });
        }else{
          setNumber({
            tel: '016806465',
            num: '(01) 6806465'
          });
        }
      }
      
    }else{
      if (TSource) {
        switch (TSource) {
          case '01clarohogar':
            setNumber({
              tel: '016806301',
              num: '(01) 6806301'
            });
            break;
  
          case '02clarointernet':
            setNumber({
              tel: '016806302',
              num: '(01) 6806302'
            });
            break;
  
          case '03clarotv':
            setNumber({
              tel: '016806303',
              num: '(01) 6806303'
            });
            break;
  
          case '05claroperu':
            setNumber({
              tel: '016806545',
              num: '(01) 6806545'
            });
            break;
  
          case '06claromovil':
            setNumber({
              tel: '016805992',
              num: '(01) 6805992'
            });
            break;
        }
      } else {
        if (pathname.includes('planes-moviles')){
          setNumber({
            tel: '016805992',
            num: '(01) 6805992'
          });
        }else{
          setNumber({
            tel: '016805993',
            num: '(01) 6805993'
          });
        }
      }
    }
  },[
    pathname,
    TSource
  ]);

  return (
    <>
      <footer className="bg-black flex flex-col items-center">
    <div className='flex justify-center items-center gap-[200px] max-lg:flex-col max-lg:gap-10 py-5'>
          <div className="flex flex-col items-center">

            {Logo}
            </div>
            <div className="text-white font-bold flex flex-col items-center justify-evenly gap-2">
            <span>Línea exclusiva de ventas</span>
            <a
              href={ `tel:${ number.tel }` }
              className="text-3xl transition-all duration-300 hover:text-[#ee122c]"
            >
              { number.num }
            </a>
            </div>
          <div className="text-white text-xs font-bold flex flex-col items-center justify-start gap-4">
            {component}
          </div>
    </div>
        <div className="text-[#ee122c] text-center text-sm font-semibold py-8 border-t border-gray-500 w-full lg:text-base">
          <span>{nombreDelDominio.includes("clarofertas")?'Distribuidor Autorizado de Claro': '©COMPANY D&C DIGITAL GROUP S.A.C. Distribuidor Autorizado de Claro'}</span>
        </div>
        <a
          href={`tel:${ number.tel }`}
          className="fixed left-3 bottom-3 rounded-full w-16 h-16 bg-[#ee122c] text-white text-3xl flex items-center justify-center animate-[blink_2s_infinite] md:hidden"
        >
          <i className="fa-solid fa-phone-volume"></i>
        </a>
      </footer>
      <Modal
        activeModal={ activeModalTerms }
        setActiveModal={ setActiveModalTerms }
        background={ "#fff" }
        buttonEnd
      >
        <div className="w-full">
          <h5 className="text-3xl text-[#ee122c] text-center font-bold mb-4">TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB</h5>
          <p className="text-justify text-gray-500 mb-4">El presente documento establece los términos y condiciones generales (en adelante, los “Términos y Condiciones”) aplicables al uso del sitio web www.planeshogarperu.com.pe (en adelante, el “Sitio”) puesto a disposición del público en general (en adelante, indistintamente, el “Usuario” o los “Usuarios”) por parte de COMPANY D&C DIGITAL GROUP S.A.C. (en adelante, la “Empresa”) para la comercialización de productos y servicios prestados por América Móvil Perú S.A.C. (en adelante, “CLARO”). El Usuario que desee usar el Sitio podrá hacerlo sujetándose a los Términos y Condiciones. LOS PRESENTES TÉRMINOS Y CONDICIONES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, POR LO QUE CUALQUIER USUARIO QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO. El Usuario debe leer todas las condiciones establecidas en estos Términos y Condiciones, así como en los demás documentos incorporados en el Sitio previo al uso del Sitio. La aceptación expresa de los Términos y Condiciones que se establecen a continuación y/o el mero uso del Sitio que haga el Usuario, implica que el Usuario declara haber sido previamente informado de, así como haber leído, comprendido y aceptado, estos Términos y Condiciones, así como las condiciones particulares o modificaciones que respecto de ellas se puedan efectuar, a todas las cuales el Usuario se adhiere plenamente y sin reservas. El Usuario declara y garantiza estar apto y tener capacidad legal para aceptar los presentes Términos y Condiciones y que toda la información que proporcione a la Empresa en el marco del Sitio, bajo cualquier forma, será exacta, verdadera, completa y correcta; liberando de cualquier responsabilidad sobre el particular a la Empresa y a CLARO. En ese sentido, para efectos de las exoneraciones de responsabilidad, CLARO comprende también a cualquiera de sus respectivos directores, funcionarios, empleados u otros representantes.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">1. RESPONSABILIDAD LIMITADA</h6>
          <p className="text-justify text-gray-500 mb-4">El Usuario declara haber comprendido y aceptado que toda información, comunicación, opinión, manifestación, contenido, transacción u operación a la que acceda a través del Sitio es de exclusiva responsabilidad de la Empresa; reconociendo el Usuario que el uso del Sitio y la confianza que asigne al mismo son bajo su propio riesgo. En ese sentido, el Usuario declara haber comprendido y aceptado que, por ser el Sitio un espacio de propiedad de la Empresa y administrado exclusivamente por ella, CLARO no respalda ni garantiza la información, comunicaciones, opiniones, manifestaciones, contenido, transacciones u operaciones a las que el Usuario acceda a través del Sitio; por lo cual el Usuario libera de cualquier responsabilidad sobre el particular a CLARO.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">2. LIMITACIONES Y MODIFICACIÓN DE LAS CONDICIONES APLICABLES AL SITIO</h6>
          <p className="text-justify text-gray-500 mb-4">La Empresa expresamente se reserva la facultad y puede efectuar, en cualquier momento, bajo su exclusiva discreción y sin previo aviso, modificaciones sobre estos Términos y Condiciones. Las modificaciones entrarán en vigor inmediatamente después de que aparezcan publicadas por cualquier medio, sin necesidad de notificación alguna al Usuario. En los casos en que la Empresa estime conveniente realizar alguna notificación, esta se efectuará por cualquier medio, incluyendo, sin limitaciones, anotación en el sitio web www.planeshogarperu.com.pe, correo electrónico u otros mecanismos electrónicos o convencionales de correos o comunicaciones, o cualquier otro método equivalente. Es recomendable que el Usuario revise en forma periódica el Sitio a fin de informarse de las modificaciones que puedan haberse introducido; la continuación en el uso del Sitio, implicará la aceptación sin reservas a dichas modificaciones por parte del Usuario.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">3. SUSPENSIÓN</h6>
          <p className="text-justify text-gray-500 mb-4">La Empresa se reserva el derecho de suspender en cualquier momento, temporalmente y sin previo aviso, el Sitio, por el tiempo que resulte necesario.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">4. VIGENCIA, INTERRUPCIÓN Y TERMINACIÓN DEL SITIO</h6>
          <p className="text-justify text-gray-500 mb-4">El Sitio estará disponible por tiempo indefinido. La Empresa, en cualquier momento, sin previo aviso, podrá interrumpir, desactivar, denegar, bloquear, dar por terminado el acceso o cancelar, en todo o parte, el Sitio, por cualquier razón, incluyendo, sin limitación, la detección de cualquier tipo de acto u omisión que, a juicio y a sola discreción de la Empresa, se considere como una violación a estos Términos y Condiciones, a otras condiciones aplicables o a las que emanen de la normativa vigente, sin que ello genere para La Empresa responsabilidad de clase alguna. La Empresa no asumirá responsabilidad alguna frente al Usuario o frente a terceros por ninguna de las acciones antes mencionadas. Ni la interrupción, desactivación, denegación, bloqueo, terminación del acceso, desactivación del Sitio, ni cualquier acción u omisión del Usuario implicará la pérdida de vigencia de estos Términos y Condiciones.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">5. INTERPRETACIÓN</h6>
          <p className="text-justify text-gray-500 mb-4">Los títulos de las cláusulas o numerales son meramente orientadores y no forman parte del contenido preceptivo de estos Términos y Condiciones. Los términos y condiciones que integran los presentes Términos y Condiciones constituyen la expresión formal y definitiva de la declaración de voluntad de las partes, debiendo interpretarse los unos por los otros atribuyendo a los dudosos el sentido que se derive del conjunto de todos. La eventual nulidad o ineficacia de algunas de las estipulaciones, no afecta ni invalida la eficacia u obligatoriedad de las demás contenidas en los presentes Términos y Condiciones. Cualesquiera documentos o declaraciones previos a la entrada en vigor de los presentes Términos y Condiciones se considerarán definitivamente derogados.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">6. COMPETENCIA</h6>
          <p className="text-justify text-gray-500 mb-4">Todas las cuestiones relacionadas con el uso del Sitio se rigen por las leyes peruanas. La Empresa y el Usuario hacen renuncia expresa a cualquier otro fuero y convienen que cualquier controversia derivada de su uso o aplicación será sometida a la jurisdicción de los Juzgados y Tribunales competentes de Lima, Perú. En el caso de que el Usuario tenga su domicilio fuera de Perú, la Empresa y el Usuario se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales competentes en Lima, Perú.</p>
        </div>
      </Modal>
      <Modal
        activeModal={ activeModalPolicy }
        setActiveModal={ setActiveModalPolicy }
        background={ "#fff" }
        buttonEnd
      >
        <div className="w-full">
          <h5 className="text-3xl text-[#ee122c] text-center font-bold mb-4">POLITICAS DE PRIVACIDAD</h5>
          <p className="text-justify text-gray-500 mb-4">COMPANY D&C DIGITAL GROUP S.A.C., es una sociedad interesada en garantizar, respetar y cumplir de manera estricta el derecho fundamental de protección de los datos personales, previsto en el artículo 2, numeral 6, de la Constitución Política del Perú, realizando el almacenamiento de datos, utilizando estándares de alta calidad, con la finalidad de mantener la confidencialidad de los mismos, cumpliendo con lo ordenado en la Ley de Protección de Datos Personales - Ley N° 29733, reglamento de ley aprobado por el decreto supremo N° 003-2013-JUS, o cualquier otra norma que derogue y/o modifique las normas existentes.</p>
          <p className="text-justify text-gray-500 mb-4">Como es nuestra intención, mantener una relación duradera, es importante que usted nos otorgue su aprobación para acceder a sus datos personales, para ello es necesario brindarle la siguiente información:</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">1.- ¿Qué son los datos personales?</h6>
          <p className="text-justify text-gray-500 mb-4">Conforme a la ley, los datos personales es toda información sobre una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados. Tenemos, por ejemplo, los datos de carácter identificativo, como lo son nombres, apellidos, N.º de DNI, N.º de RUC, N.º de Pasaporte, Dirección de domicilio, teléfono, dirección de correo electrónico, imagen, voz, firma electrónica; datos de características personales; datos económicos - financieros y de seguros, entre otros. Pudiendo acceder de igual forma a sus datos personales, en forma física, oral o electrónica, sea a través de fuentes públicas o de terceros.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">2.- ¿Es obligatorio obtener autorización para el tratamiento de sus datos personales?</h6>
          <p className="text-justify text-gray-500 mb-4">Sí, los datos personales solamente pueden ser objeto de tratamiento con consentimiento del titular, salvo que la ley lo autorice en determinada situación. De igual manera, es preciso indicar que el consentimiento es libre, previo, informado, expreso e inequívoco.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">3.- ¿COMPANY D&C DIGITAL GROUP S.A.C. es el titular de sus datos personales?</h6>
          <p className="text-justify text-gray-500 mb-4">Sí, al aceptar nuestra política de privacidad, sus datos pueden ser tratados por la empresa, es importante precisar que, al haber dado usted su consentimiento de utilización de datos, nuestra empresa está autorizada a almacenar, procesar y transferir sus datos personales a otras empresas vinculadas.</p>
          <p className="text-justify text-gray-500 mb-4">Los datos serán incluidos en nuestro fichero de clientes y nuestra finalidad es informar a nuestros clientes las actualizaciones de nuestros servicios y/o productos.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">4.- ¿Usted autoriza el ofrecimiento de nuevos productos y/o servicios que oferte la empresa?</h6>
          <p className="text-justify text-gray-500 mb-4">Si usted acepta la presente política de privacidad, COMPANY D&C DIGITAL GROUP S.A.C. se comunicará con usted y será informado a través de medios telemáticos, llamadas, sistemas de llamadas telefónicas, mensajes de texto u otros mensajes electrónicos de uso masivo de comunicación de nuevos productos y servicios, que sean promovidos como resultado de campañas de promoción y marketing que realice la empresa.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">5.- ¿Es factible que usted revoque la autorización de sus datos?</h6>
          <p className="text-justify text-gray-500 mb-4">Sí, es posible revocar la autorización en cualquier momento, sin justificación previa. Se puede revocar la autorización para las finalidades autorizadas, ya sea de manera parcial o total.</p>
          <h6 className="text-xl text-[#ee122c] text-start font-bold mb-4">6.- ¿Qué derechos ejercen los titulares de los datos personales?</h6>
          <p className="text-justify text-gray-500 mb-4">Derecho de acceso: solicitando información sobre los datos personales registrados en el banco de datos; derecho de rectificación (actualización, inclusión): con los que usted puede modificar los datos brindados, ya sea porque exista algún error, sean falsos, incompletos u otra causa; derecho de cancelación (supresión): ejerciendo este derecho es posible solicitar la supresión o cancelación de sus datos personales de nuestro banco de datos considerando que son esenciales para la ejecución del mismo; derecho de oposición: toda persona tienen la facultad de oponerse al uso de sus datos, cuando estos no han sido autorizados, asimismo puede oponerse por la situación personal concreta.</p>
        </div>
      </Modal>
    </>
  )
}