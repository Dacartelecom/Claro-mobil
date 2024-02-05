import  { type ChangeEvent, type FC, useState } from "react";
import type { FormProps } from "../interfaces/Form.props";

export const Form: FC<FormProps> = ({
  children
}) => {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;
  
    const urlDelSitio = window.location.href;
    const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];
    
    const [loading, setLoading] = useState<boolean>(false);
    const [length, setLength] = useState<number>(0);
    const [response, setResponse] = useState<null | string>(null);
    const [inputState, setInputState] = useState<string>('');
    const [TSource] = useState(params.get('T-source'));
    const [Gclid] = useState(params.get('gclid'));

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
    
      const interval = (error:string) => {
        setResponse(error)
        setTimeout(() => {
          setResponse('')
        }, 3000);
      }
      
    
    
      const sendNumber = (e: any) => {
        e.preventDefault();
        setLoading(true);
        const url = "https://ws-dacar-ica.octopus-latam.com/?";
        const data = new URLSearchParams();
        let service = 'PeruHfcCallme'
    
    
      if (nombreDelDominio.includes("clarofertas")) {
        if(TSource === 'ext'){
          data.append("service", "PeruHfcResi");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc2"
        } else if(TSource === 'ext_1'){
          data.append("service", "PeruMovilRsCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruHfc3"
        } else if(TSource === 'ext_2'){
          data.append("service", "PeruMovilResi");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc5"
        } else if(TSource === 'ext_3'){
          data.append("service", "PeruHfcRsCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilCallme"
        } else {
          data.append("service", "PeruHfcResi");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
        }
        
      }else{
    
        if(TSource === '01clarohogar'){
          data.append("service", "PeruHfc1");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc1"
        } else if(TSource === '02clarointernet'){
          data.append("service", "PeruHfc2");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc2"
        } else if(TSource === '03clarotv'){
          data.append("service", "PeruHfc3");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc3"
        } else if(TSource === '05claroperu'){
          data.append("service", "PeruHfc5");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc5"
        } else if(TSource === '06claromovil'){
          data.append("service", "PeruMovilCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilCallme"
        } else if(pathname.includes('planes-moviles')){
          data.append("service", "PeruMovilCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilCallme"
        } else {
          data.append("service", "PeruHfcCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
        }
      
      }
    
    
    
        data.append("telephone", inputState);
    
        if (TSource) {
          data.append("tsource", TSource);
        } else {
          data.append("tsource", "");
        }
    
        if (Gclid) {
          data.append("gclid", Gclid);
        } else {
          data.append("gclid", "");
        }
    
        data.append("ip", "127.0.0.1");
    
        const lead = url + data.toString();
    
        fetch(lead)
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => {
          console.log(response)
          console.log(lead)
          if (response.status === 'ERROR') {
            interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
            setLoading(false);
          } else {
            interval('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
            setLoading(false);
          }
          setInputState(() => (''));
          console.log(service);
    
        });
      }

  return (
    <form className='w-[400px] h-[320px] bg-white rounded-md absolute right-[5%] top-[100px] text-[#222222]'
    onSubmit={ sendNumber }>
        <div className='w-full h-full flex flex-col justify-start p-[30px] gap-[10px]'>
            {children}
            <div className='flex flex-col justify-start text-[#B7202E]'>
            <span className='text-[16px]'> Déjanos tu número y te llamaremos </span>
                <input 
                type="text"
                id="number-form"
                className='outline-none border-b-2 border-x-0 border-[#B7202E]'
                placeholder="987654321"
                pattern="[0-9]{1,9}"
                maxLength={9}
                value={ inputState }
                onChange={ changeNumber }
                />
            </div>
            <div className='flex gap-2 text-[#B7202E]'>
                <input className='border-[#B7202E]' type="checkbox" />
                <span>Terminos y condiciones</span>
            </div>
            <div className='w-full flex justify-center'>
                <button
                 type='submit'
                 disabled={length === 9? false : true }
                className='bg-[#1F97AE] w-[200px] h-[40px] border-white rounded-xl text-white transition-all duration-300 hover:border hover:border-[#1F97AE] hover:bg-white hover:text-[#1F97AE]'>solicitar llamada { loading && <span className="loader"></span> }</button>
            </div>
        </div>
    </form>
  )
}
