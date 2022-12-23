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

            experience: {
                position: '',
                company: '',
                task: '',
                city: '',
                from: '',
                to: '',
            },

            newEducation: {
                university_name: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',
                id: uniqid()
            },

            countEducation: 1,
            countExperience: 1
        }

        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);

        this.handleAddEducation = this.handleAddEducation.bind(this);
        this.handleAddExperience = this.handleAddExperience.bind(this);
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
            if (educationItem.id === id ) {
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

    handleChangeExperience = (e) => {
        let newExperience = {
            ...this.state.experience,
            [e.target.name]: e.target.value
        }

        this.setState({
            experience: newExperience
        });
        console.log(newExperience, 'EXPERIENCE');
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
            }), () =>  console.log(Object.keys(this.state.education).length) 
        );        
    }
 
    handleAddExperience = (e) => {
        e.preventDefault();
        this.setState({ countExperience: this.state.countExperience + 1 });
        
        console.log(this.state.countExperience, 'COUNT EXP_____')
    }

    render() {
        const { personalInfo, education, experience, countEducation, countExperience } = this.state;

        return(
            <main>
                <Header />   
                <CVFormEditor 
                    onChangePersonal={this.handleChangePersonalInfo} 
                    onChangeEducation={this.handleChangeEducation} 
                    onChangeExperience={this.handleChangeExperience} 

                    onAddEducation={this.handleAddEducation} 
                    onAddExperience={this.handleAddExperience}
                    countEducation={countEducation} 
                    countExperience={countExperience}

                    education={education}
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
