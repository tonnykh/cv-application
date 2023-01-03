import { useState } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";
import uniqid from "uniqid";
import exampleData from "./Main/Utils/exampleData";
import "../styles/Main.css";
import "../styles/Header.css";
import "../styles/CVFormEditor.css";
import "../styles/CVPreview.css";

const Main = () => {
  const [personalInfo, setPersonalInfo] = useState({
    first_name: "",
    last_name: "",
    professional_title: "",
    address: "",
    email: "",
    phone_number: "",
    description: "",
  });

  const [education, setEducation] = useState([
    {
      university_name: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);

  const [experience, setExperience] = useState([
    {
      position: "",
      company: "",
      task: "",
      city: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);

  const [newEducation, setNewEducation] = useState({
    university_name: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
    id: uniqid(),
  });

  const [newExperience, setNewExperience] = useState({
    position: "",
    company: "",
    task: "",
    city: "",
    from: "",
    to: "",
    id: uniqid(),
  });

  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const handleChangePersonalInfo = (e) => {
    let newPersonalInfo = {
      ...personalInfo,
      [e.target.name]: e.target.value,
    };

    setPersonalInfo(newPersonalInfo);
  };

  const handleChangeEducation = (e, id) => {
    const newEducation = education.map((educationItem) => {
      if (educationItem.id === id) {
        return { ...educationItem, [e.target.name]: e.target.value };
      } else {
        return educationItem;
      }
    });

    setEducation(newEducation);
  };

  const handleChangeExperience = (e, id) => {
    const newExperience = experience.map((experienceItem) => {
      if (experienceItem.id === id) {
        return { ...experienceItem, [e.target.name]: e.target.value };
      } else {
        return experienceItem;
      }
    });

    setExperience(newExperience);
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    setEducation([ ...education, newEducation ]);
    setNewEducation({ ...newEducation, id: uniqid() });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperience([ ...experience, newExperience ]);
    setNewExperience({ ...newExperience, id: uniqid() });
  };

  const handleDeleteEducation = (id) => {
    const newEducation = education.filter(
      (educationItem) => educationItem.id !== id
    );

    setEducation([...newEducation]);
  };

  const handleDeleteExperience = (id) => {
    const newExperience = experience.filter(
      (experienceItem) => experienceItem.id !== id
    );

    setExperience([...newExperience ]);
  };

  const handleAutofill = (e) => {
    setPersonalInfo(exampleData.personalInfo);
    setEducation(exampleData.education);
    setExperience(exampleData.experience);
  };

  const togglePreview = () => {
    setPreviewVisible(!isPreviewVisible);
  };

  return (
    <main>
      <Header
        autofill={handleAutofill}
        preview={togglePreview}
        state={isPreviewVisible}
      />
      <CVPreview
        personalInfo={personalInfo}
        education={education}
        experience={experience}
        state={isPreviewVisible}
      />
      <CVFormEditor
        onChangePersonal={handleChangePersonalInfo}
        onChangeEducation={handleChangeEducation}
        onChangeExperience={handleChangeExperience}
        onAddEducation={handleAddEducation}
        onAddExperience={handleAddExperience}
        education={education}
        experience={experience}
        personalInfo={personalInfo}
        onDeleteEducation={handleDeleteEducation}
        onDeleteExperience={handleDeleteExperience}
        state={isPreviewVisible}
      />
    </main>
  );
};

export default Main;
