import FirstComponent from './FirstComponent';
import {FifthComponent} from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourtthComponent';
import LearningJavaScript from './LearningJavaScript';



export default function LearningComponent() {
    return(
        <div>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <FifthComponent></FifthComponent>
            <LearningJavaScript></LearningJavaScript>
        </div>
    )

    }