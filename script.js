const professionalSkill= document.getElementById("professional-tab");
const professionalSkillContent= document.getElementById("professional")
const educationContent= document.getElementById("education")
const educationTab= document.getElementById("education-tab")

const experienceContent= document.getElementById("experience")
const experienceTab= document.getElementById("experience-tab")
professionalSkill.addEventListener("click",(e)=>{professionalSkillContent.classList.remove("fade");
professionalSkillContent.classList.add("show")
educationContent.classList.add("fade")
educationContent.classList.remove("show")
experienceContent.classList.add("fade")
experienceContent.classList.remove("show")
}

);


educationTab.addEventListener("click",(e)=>{educationContent.classList.remove("fade");
educationContent.classList.add("show")
professionalSkillContent.classList.add("fade")
professionalSkillContent.classList.remove("show")
experienceContent.classList.add("fade")
experienceContent.classList.remove("show")
}
);

experienceTab.addEventListener("click",(e)=>{experienceContent.classList.remove("fade");
experienceContent.classList.add("show")
professionalSkillContent.classList.add("fade")
professionalSkillContent.classList.remove("show")
educationContent.classList.add("fade")
educationContent.classList.remove("show")
}
);

