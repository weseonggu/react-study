import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'


export default function CounterButton({by, incrementMethod, decrementMethod}) {    

    //[0, ƒ]
    //const [firstElt, secondElt] = array
    const [count, setCount] = useState(0)

    function incrementCounterFunction() {
        //setCount(count + by)
        incrementMethod(by)
    }

    function decrementCounterFunction() {
        //setCount(count - by)
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}// onclick에 incrementCounterFunction을 연결하려면 중괄호를 써야함 [뒤에()를 쓸경우 함수호출값이 할당됨]
                >+{by}</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >-{by}</button>
 
            </div>
        </div>
    )
}

CounterButton.propTypes = {    // 특정한 타입의 데이터만 올 수 있게함
    by: PropTypes.number
}

CounterButton.defaultProps = { // 기본값 설정
    by: 5
}