import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";
import uniqid from "uniqid";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            personalInfo: {
                first_name: '',
                last_name: '',
                address: '',
                email: '',
                phone_number: '',
                description: ''
            },

            education: [
                {
                    university_name: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                    id: uniqid()
                }
            ],

            experience: [
                {
                    position: '',
                    company: '',
                    task: '',
                    city: '',
                    from: '',
                    to: '',
                    id: uniqid()
                }
            ],

            newEducation: {
                university_name: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',
                id: uniqid()
            },

            newExperience: {
                position: '',
                company: '',
                task: '',
                city: '',
                from: '',
                to: '',
                id: uniqid()
            }
        }

        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);

        this.handleAddEducation = this.handleAddEducation.bind(this);
        this.handleAddExperience = this.handleAddExperience.bind(this);

        this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    }

    handleChangePersonalInfo = (e) => {
        let newPersonalInfo = {
            ...this.state.personalInfo,
            [e.target.name]: e.target.value
        }

        this.setState({
            personalInfo: newPersonalInfo         
        });
        console.log(newPersonalInfo, 'NEWINFO');

    };  

    handleChangeEducation = (e, id) => {
        const newEducation = this.state.education.map(educationItem => {
            if ( educationItem.id === id ) {
                return { ...educationItem, [e.target.name] : e.target.value };
            } else {
                return educationItem;
            }
        })
 
        this.setState({
            education: newEducation
        }, () => console.log(this.state.education, '1----EDUCATION___'));

        console.log(id, 'TARGET____ID');
        console.log(this.state.education, "EDUCATION______");
    }

    handleChangeExperience = (e, id) => {
        const newExperience = this.state.experience.map(experienceItem => {
            if ( experienceItem.id === id ) {
                return { ...experienceItem, [e.target.name] : e.target.value }; 
            } else {
                return experienceItem;
            }
        })

        this.setState({
            experience: newExperience
        }, () => console.log(this.state.experience, '1---EXPERIENCE___'));
    }

    handleAddEducation = (e) => {
        e.preventDefault();
    
        this.setState(prevState => ({
            education: [
              ...prevState.education, prevState.newEducation
            ],
            newEducation: {
              ...prevState.newEducation, id: uniqid()
            }
        }), () =>  console.log(Object.keys(this.state.education).length) );        
    }
 
    handleAddExperience = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            experience: [
                ...prevState.experience, prevState.newExperience
            ],
            newExperience: {
                ...prevState.newExperience, id: uniqid()
            }
        }), () => console.log(Object.keys(this.state.education).length) );
    }

    handleDeleteEducation = (id) => {
        // e.preventDefault();


        const deleteEducation = this.state.education.filter(
            (educationItem) => educationItem.id !== id
        )



        this.setState({
            education: [...deleteEducation]
        }, () => console.log(deleteEducation, "EduCation_____00")
        )

        console.log("DELETE---EDUCATIOn---", deleteEducation);
    }


    render() {
        const { personalInfo, education, experience } = this.state;

        return(
            <main>
                <Header />   
                <CVFormEditor 
                    onChangePersonal={this.handleChangePersonalInfo} 
                    onChangeEducation={this.handleChangeEducation} 
                    onChangeExperience={this.handleChangeExperience} 

                    onAddEducation={this.handleAddEducation} 
                    onAddExperience={this.handleAddExperience}

                    education={education}
                    experience={experience}

                    onDeleteEducation={this.handleDeleteEducation}
                />
                <CVPreview 
                    personalInfo={personalInfo} 
                    education={education} 
                    experience={experience} 
                />
            </main>
        )
    }
}

export default Main;
