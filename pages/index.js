import MeetupList from "../components/meetups/MeetupList"
import News from "./news/index";
import Welcome from "./news/welcome";



// const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         title: "A First meetup",
//         address: "Kushtia",
//         description: "This Is First meetup "
//     },
//     {
//         id: "m2",
//         title: "A Second meetup",
//         address: "Dhaka",
//         description: "This Is Second meetup "
//     },
// ]

const HomePage = () => {

    return (

        <div>
            <News name="prothom-alo" heroName="Prothom Alo">
                Children Element
            </News>
            <News name="daily-star" heroName="Daily Star"/>
            <News heroName="Kaler Khontho"  name="kaler-khontho">
                <button>Action</button>
            </News>
            <Welcome name="prothom-alo" heroName="Prothom Alo"/>
            <Welcome name="daily-star" heroName="Daily Star"/>
            <Welcome heroName="Kaler Khontho"  name="kaler-khontho"/>
        </div>
    );
}


export default HomePage;