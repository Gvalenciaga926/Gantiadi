import React from 'react'
import logo from '../../assets/vetlogo.png'
import './Veterans.css'

const Veterans = () => {
  return (
    <div>
        <div className="bage">
            <img src={logo} alt="" />
            <p>მოსწავლე-ახალგაზრდობის ცენტრსა და ვეტერანების საქმეთა სახელმწიფო სამსახურს შორის გაფორმებული ურთიერთთანამშრომლობის მემორანდუმის საფუძველზე , ცენტრი <span className='sale'>50%-იან</span> ფასდაკლების სერვისს სთავაზობს ვეტერანებს, ომში დაღუპულთა ოჯახის წევრებს და მარჩენალდაკარგულებს სპორტის, შემოქმედებისა და ჯანმრთელობის რეაბილიტაციის მიმართულებით.</p>
        </div>
    </div>
  )
}

export default Veterans