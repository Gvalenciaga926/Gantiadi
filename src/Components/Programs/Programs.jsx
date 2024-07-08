import React , {useState} from 'react'
import './Programs.css'
import art from '../../assets/art.png'
import sport from '../../assets/tournament.png'
import culture from '../../assets/together.png'
import driving from '../../assets/driving-license.png'
import ReactCardFlip from 'react-card-flip'
import judo from '../../assets/karate.png'
import chess from '../../assets/chess.png'
import ping from '../../assets/pp.png'
import fight from '../../assets/box.png'
import dance from '../../assets/tango.png'
import paint from '../../assets/paint.png'
import sculpt from '../../assets/sculpting.png'
import prava from '../../assets/prava.png'
import ruli from '../../assets/ruli.png'
import milc from '../../assets/milc.png'
import hands from '../../assets/hands.png'

const Programs = () => {
    const [isFlipped1 , setIsFlipped1] = useState(false);
    const [isFlipped2 , setIsFlipped2] = useState(false);
    const [isFlipped3 , setIsFlipped3] = useState(false);
    const [isFlipped4 , setIsFlipped4] = useState(false);

    function flipCard1() {
        setIsFlipped1(!isFlipped1)
    }
    function flipCard2() {
        setIsFlipped2(!isFlipped2)
    }
    function flipCard3() {
        setIsFlipped3(!isFlipped3)
    }
    function flipCard4() {
        setIsFlipped4(!isFlipped4)
    }

  return (
    <div className="cardsection">
        <div className="title">
            <h3>კურსები</h3>
            <h2>რას გთავაზობთ</h2>
        </div>
            <div className='programs'> 
                <div className="program">
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
                    <div className="card" onClick={flipCard1}>
                        <img src={sport} alt="" />
                        <h3>სპორტი</h3>
                        <button className='cardbtn'>გაიგე მეტი</button>
                    </div>
                    <div className="card card-back" onClick={flipCard1}>
                        <h3>სპორტი</h3>
                        <ul>
                            <li><h2>ძიუდო</h2></li>
                            <li><h2>შერეული საბრძოლო ხელოვნება</h2></li>
                            <li><h2>მაგიდის ჩოგბურთი</h2></li>
                            <li><h2>ჭადრაკი</h2></li>
                            <li><h2>ხრიდოლი</h2></li>
                            <li><h2>ტაეკვანდო</h2></li>
                            <li><h2>კიოკუშინ კარატე</h2></li>
                            <li><h2>აიკიდო</h2></li>
                            <li><h2>ხელოვნება საბაზო და საკორექციო ვარჯიში</h2></li>
                        </ul>
                        <button className='closebtn'>დახურვა</button>
                        <div className="smallimgs">
                            <img className='smallimg smalljudo' src={judo}/>
                            <img className='smallimg smallfight' src={fight}/>
                            <img className='smallimg smallchess' src={chess}/>
                            <img className='smallimg smallping' src={ping}/>
                        </div>
                    </div>
                </ReactCardFlip>
                </div>

                <div className="program">
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection='horizontal'>
                        <div className="card" onClick={flipCard2}>
                            <img src={art} alt="" />
                            <h3>ხელოვნება</h3>
                            <button className='cardbtn'>გაიგე მეტი</button>
                        </div>
                        <div className="card card-back" onClick={flipCard2}>
                            <h3>ხელოვნება</h3>
                            <ul>
                                <li><h2>ხატვა</h2></li>
                                <li><h2>ფერწერა</h2></li>
                                <li><h2>ძერწვა</h2></li>
                                <li><h2>ჰიპ-ჰოპი</h2></li>
                                <li><h2>სპორტული და სამეჯლისო ცეკვები</h2></li>
                                <li><h2>ქართული ცეკვა</h2></li>
                                <li><h2>ტეატრალური ცერკვა</h2></li>
                            </ul>
                            <button className='closebtn closebtn2'>დახურვა</button>
                            
                                <img className='smallimg smalldance' src={dance}/>
                                <img className='smallimg smallsculpt' src={sculpt}/>
                                <img className='smallimg smallpaint' src={paint}/>                        
                            
                        </div>
                    </ReactCardFlip>
                    
                </div>
                <div className="program program3">
                    <ReactCardFlip isFlipped={isFlipped3} flipDirection='horizontal'>
                        <div className="card card3" onClick={flipCard3}>
                            <img src={driving} alt="" />
                            <h3>მართვის მოწმობა</h3>
                            <button className='cardbtn'>გაიგე მეტი</button>
                        </div>
                        <div className="card card-back card3-back" onClick={flipCard3}>
                            <h3>მართვის მოწმობა</h3>
                            <ul>
                                <li><h2>სახალისო გაკვეთილები მართვის მოწმობის შემსწავლელთათვის</h2></li>
                                <li><h2>8 დღიანი კურსი</h2></li>
                                <li><h2>მონდომების და პუნქტუალურობის შესაბამისად, გამოცდის წარმატებით დასრულების 100%იანი გარანტია</h2></li>
                            </ul>
                            <button className='closebtn closebtn3'>დახურვა</button>
                            <div className="smallimgs">
                                <img className='smallimg smallruli' src={ruli}/>
                                <img className='smallimg smallprava' src={prava}/>
                                <img className='smallimg smallmilc' src={milc}/>                        
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
                <div className="program">
                <ReactCardFlip isFlipped={isFlipped4} flipDirection='horizontal'>
                    <div className="card" onClick={flipCard4}>
                        <img src={culture} alt="" />
                        <h3>კულტურა</h3>
                        <button className='cardbtn'>გაიგე მეტი</button>
                    </div>
                    <div className="card card-back" onClick={flipCard4}>
                        <h3>კულტურა</h3>
                        <ul>
                            <li><h2>სარეაბილიტაციო-გამაჯანსაღებელი აიკიდო</h2></li>
                            <li><h2>არტ-თერაპიული და სატრენინგო სივრცე</h2></li>
                        </ul>
                        <button className='closebtn closebtn4'>დახურვა</button>
                        <img src={hands} className='smallhands'/>
                    </div>
                </ReactCardFlip>
                </div>
            </div>
    </div>
    
  )
}

export default Programs