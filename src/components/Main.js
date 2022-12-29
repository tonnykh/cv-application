import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";
import uniqid from "uniqid";
import exampleData from "./Main/Utils/exampleData";
import "../styles/Main.css";
import "../styles/Header.css";
import "../styles/CVFormEditor.css";
import "../styles/CVPreview.css";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        first_name: "",
        last_name: "",
        professional_title: "",
        address: "",
        email: "",
        phone_number: "",
        description: "",
      },

      education: [
        {
          university_name: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],

      experience: [
        {
          position: "",
          company: "",
          task: "",
          city: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],

      newEducation: {
        university_name: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },

      newExperience: {
        position: "",
        company: "",
        task: "",
        city: "",
        from: "",
        to: "",
        id: uniqid(),
      },

      isPreviewVisible: false,
    };

    this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);

    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);

    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);

    this.togglePreview = this.togglePreview.bind(this);
  }

  handleChangePersonalInfo = (e) => {
    let newPersonalInfo = {
      ...this.state.personalInfo,
      [e.target.name]: e.target.value,
    };

    this.setState({
      personalInfo: newPersonalInfo,
    });
  };

  handleChangeEducation = (e, id) => {
    const newEducation = this.state.education.map((educationItem) => {
      if (educationItem.id === id) {
        return { ...educationItem, [e.target.name]: e.target.value };
      } else {
        return educationItem;
      }
    });

    this.setState({
      education: newEducation,
    });
  };

  handleChangeExperience = (e, id) => {
    const newExperience = this.state.experience.map((experienceItem) => {
      if (experienceItem.id === id) {
        return { ...experienceItem, [e.target.name]: e.target.value };
      } else {
        return experienceItem;
      }
    });

    this.setState({
      experience: newExperience,
    });
  };

  handleAddEducation = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      education: [...prevState.education, prevState.newEducation],
      newEducation: {
        ...prevState.newEducation,
        id: uniqid(),
      },
    }));
  };

  handleAddExperience = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      experience: [...prevState.experience, prevState.newExperience],
      newExperience: {
        ...prevState.newExperience,
        id: uniqid(),
      },
    }));
  };

  handleDeleteEducation = (id) => {
    const newEducation = this.state.education.filter(
      (educationItem) => educationItem.id !== id
    );

    this.setState({
      education: [...newEducation],
    });
  };

  handleDeleteExperience = (id) => {
    const newExperience = this.state.experience.filter(
      (experienceItem) => experienceItem.id !== id
    );

    this.setState({
      experience: [...newExperience],
    });
  };

  handleAutofill = (e) => {
    this.setState({
      ...this.state,
      personalInfo: exampleData.personalInfo,
      education: exampleData.education,
      experience: exampleData.experience,
    });
  };

  togglePreview = () => {
    this.setState({
      isPreviewVisible: !this.state.isPreviewVisible,
    });
  };

  render() {
    const { personalInfo, education, experience, isPreviewVisible } =
      this.state;

    return (
      <main>
        <Header
          autofill={this.handleAutofill}
          preview={this.togglePreview}
          state={isPreviewVisible}
        />
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          state={isPreviewVisible}
        />
        <CVFormEditor
          onChangePersonal={this.handleChangePersonalInfo}
          onChangeEducation={this.handleChangeEducation}
          onChangeExperience={this.handleChangeExperience}
          onAddEducation={this.handleAddEducation}
          onAddExperience={this.handleAddExperience}
          education={education}
          experience={experience}
          personalInfo={personalInfo}
          onDeleteEducation={this.handleDeleteEducation}
          onDeleteExperience={this.handleDeleteExperience}
          state={isPreviewVisible}
        />
      </main>
    );
  }
}

export default Main;
