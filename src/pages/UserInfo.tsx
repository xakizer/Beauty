import { useContext } from 'react';
import { LangContext } from '../context/LangContext';


const UserInfo = () => {
    const [lang] = useContext(LangContext)
  return (
   <div className="main">
      <div className="userInfo">
      <div className="container">
        <div className='d-flex justify-content-center'>
          <div className='center col-12 col-sm-12 col-md-7'>
            <h4 className='text-center'>{lang === "EN" ? "YOUR INFORMATIONS" : "SİZİN MƏLUMATLARINIZ"}</h4>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">{lang === "EN" ? "Email" : "E-poçt ünvanı"}</label>
                <input type="email" className="form-control" placeholder={lang === "EN" ? "Enter your email" : "E-poçt ünvanı daxil edin"} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">{lang === "EN" ? "Password" : "Parol"}</label>
                <input type="password" className="form-control"  placeholder={lang === "EN" ? "Enter password" : "Parolu daxil edin"} />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">{lang === "EN" ? "Phone" : "Telefon"}</label>
                <input type="text" className="form-control" placeholder={lang === "EN" ? "Enter phone number" : "Telefon nömrənizi daxil edin"} />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="inputAddress2" className="form-label">{lang === "EN" ? "Country / Region" : "Ölkə / Region"}</label>
                <input type="text" className="form-control" placeholder={lang === "EN" ? "Country" : "Ölkə"} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">{lang === "EN" ? "City" : "Şəhər"}</label>
                <input type="text" className="form-control" placeholder={lang === "EN" ? "City" : "Şəhər"} />
              </div>
              <div className="col-12">
                <label htmlFor="inputState" className="form-label">{lang === "EN" ? "Address" : "Ünvan"}</label>
                <input type="text" className="form-control" placeholder={lang === "EN" ? "Apartment, suite, etc" : "Mənzil, ünvan"} />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="inputZip" className="form-label">{lang === "EN" ? "Postal Code" : "Poçt Kodu"}</label>
                <input type="text" className="form-control" placeholder={lang === "EN" ? "Your post code" : "Sizin poçt kodunuz"} />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="inputZip" className="form-label">{lang === "EN" ? "Cart" : "Kart"}</label>
                <input type="number" className="form-control" placeholder={lang === "EN" ? "Cart number" : "Kart nömrəsi"}/>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    {lang === "EN" ? "Save this information" : "Məlumatları yaddaşda saxlayın"}
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="button" className="btn">{lang === "EN" ? "Send" : "Göndər"}</button>
              </div>
            </form>
          </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default UserInfo