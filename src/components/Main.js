import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";

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
            education: [{
                university_name: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: ''
            }],
            experience: {
                position: '',
                company: '',
                task: '',
                city: '',
                from: '',
                to: '',
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

    handleChangeEducation = (e) => {
        let newEducation = {
            ...this.state.education,
            [e.target.name]: e.target.value
        }

        this.setState({
            education: newEducation
        });
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
        this.setState({ countEducation: this.state.countEducation + 1 });
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
