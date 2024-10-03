import React, { useState } from "react"
import { X } from "lucide-react"

// 가상의 프로젝트 데이터
const projectsData = [
  {
    id: 1,
    title: "tripDuo - 같이갈래",
    period: "2024.08 ~ 2024.10",
    link: "https://github.com/ezfuzzy/tripDuo",
    image: "/images/projects/tripDuo-logo.png",
    description: "여행 메이트를 구하거나 여행에 대한 정보를 공유하는 서비스",
    technologies: ["Spring", "React", "PostgreSQL"],
    details:
      "tripDuo는 여행 메이트를 구하거나 여행에 대한 정보를 공유하는 서비스입니다. 사용자는 여행 계획을 공유하고, 메이트를 구하며, 여행 정보를 쉽게 찾을 수 있습니다.",
  },
  {
    id: 2,
    title: "ezfuzzy's website",
    period: "2024.05 ~ ",
    link: "https://ezfuzzy.github.io",
    image: "/images/logos/ezfuzzy-main.png",
    description: "개인 웹사이트 제작",
    technologies: ["React", "Tailwind CSS"],
    details: `
      저의 작업물과 기술 스택을 보여주기 위한 반응형 웹사이트입니다.
      프로젝트를 진행할때 관심이 생긴 부분이나 중간에 있으면 좋겠다 싶은 미니 앱들을 하나씩 만들어서 넣는 중 입니다.
      `,
  },
  {
    id: 3,
    title: "KBO app (계획중)",
    period: "2024.10 ~ ",
    link: "https://github.com/ezfuzzy/kboApp",
    description: "KBO 각종 정보 앱",
    technologies: ["Spring", "React-native", "PostgreSQL"],
    details: "KBO와 관련된 정보를 보여주는 앱입니다.",
  },
]

const Career = () => {
  const [filter, setFilter] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
  )

  const openProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">김민준 - ezfuzzy's career</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/ezfuzzy" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="w-12 h-12" />
            </a>
            <a href="https://www.linkedin.com/in/ezfuzzy/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="LinkedIn"
                className="w-12 h-12"
              />
            </a>
            <a href="https://velog.io/@fuzzy" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.icon-icons.com/icons2/3915/PNG/512/velog_logo_icon_249278.png"
                alt="Velog"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            백엔드 개발자 김민준(ezfuzzy)입니다. 저는 개발하면서 작성한 로직을 어떻게 최적화할지 고민하는 것을
            좋아합니다.
            <br />
            <span className="font-semibold">Java</span>와 <span className="font-semibold">Spring Boot</span>를 사용하여
            프로젝트를 구성해보았고,{" "}
            <span className="font-semibold">React</span>를 프론트엔드로 하여 프로젝트를 진행했습니다.
            <br />
            또한 <span className="font-semibold">PostgreSQL</span>과 같은 RDBMS뿐만 아니라{" "}
            <span className="font-semibold">AWS</span>, <span className="font-semibold">Docker</span>와 같은 클라우드 및
            컨테이너 기술에 대한 이해를 바탕으로 배포와 운영에 대한 최적화에도 신경을 쓰고 있습니다.
            <br />
            항상 새로운 기술을 탐구하고, 사용자 경험을 향상시키는 개발에 도전하는 것을 즐기며, 프로젝트에서 팀원들과
            협업하여 성공적인 결과를 이끌어 내는 것에 관심이 많습니다.
            <br />더 나은 서비스을 만들고, 더 많은 사람들에게 가치를 제공하기 위해 계속해서 성장하고있습니다.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Programming Languages:</span>
              <span className="flex items-center space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
                  alt="Java"
                  className="w-12 h-12"
                  title="Java"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/javascript.png"
                  alt="JavaScript"
                  className="w-12 h-12"
                  title="JavaScript"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                  alt="C++"
                  className="w-12 h-12"
                  title="C++"
                />
              </span>
            </li>
            <li>
              <span className="font-semibold">Frameworks:</span>
              <span className="flex items-center space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/color/48/000000/spring-logo.png"
                  alt="Spring Boot"
                  className="w-12 h-12"
                  title="Spring Boot"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/react-native.png"
                  alt="React"
                  className="w-12 h-12"
                  title="React"
                />
              </span>
            </li>
            <li>
              <span className="font-semibold">Databases:</span>
              <span className="flex items-center space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/color/48/000000/postgreesql.png"
                  alt="PostgreSQL"
                  className="w-12 h-12"
                  title="PostgreSQL"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/oracle-logo.png"
                  alt="Oracle"
                  className="w-12 h-12"
                  title="Oracle"
                />
              </span>
            </li>
            <li>
              <span className="font-semibold">APIs:</span>
              <span className="flex items-center space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/?size=256w&id=345&format=png"
                  alt="Map API"
                  className="w-12 h-12"
                  title="Map API"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/sms.png"
                  alt="SMS API"
                  className="w-12 h-12"
                  title="SMS API"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/email.png"
                  alt="Email API"
                  className="w-12 h-12"
                  title="Email API"
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/websocket-icon-512x384-sm7dfowk.png"
                  alt="WebSocket"
                  className="w-12 h-10"
                  title="WebSocket"
                />
              </span>
            </li>
            <li>
              <span className="font-semibold">Tools:</span>
              <span className="flex items-center space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/color/48/000000/intellij-idea.png"
                  alt="IntelliJ"
                  className="w-12 h-12"
                  title="IntelliJ"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/eclipse.png"
                  alt="Eclipse"
                  className="w-12 h-12"
                  title="Eclipse"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
                  alt="VSCode"
                  className="w-12 h-12"
                  title="VSCode"
                />
                <img
                  src="https://global.discourse-cdn.com/business7/uploads/cursor1/original/2X/a/a4f78589d63edd61a2843306f8e11bad9590f0ca.png"
                  alt="Cursor AI"
                  className="w-12 h-12"
                  title="Cursor AI"
                />
                <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" className="w-12 h-12" title="Git" />
                <img
                  src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                  alt="AWS"
                  className="w-12 h-12"
                  title="AWS"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/docker.png"
                  alt="Docker"
                  className="w-12 h-12"
                  title="Docker"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-medium">경희대학교 컴퓨터공학과 학사</h3>
            <p className="text-gray-600">2016-2024</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-700">-</p>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 text-center">projects</h1>
          <input
            type="text"
            placeholder="프로젝트제목 or 기술스택 검색..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-green-900 rounded-2xl hover:shadow-2xl hover:scale-105 transform transition ease-in-out duration-300 cursor-pointer w-full"
                onClick={() => openProjectDetails(project)}>
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                </div>
                <div className="p-4">
                  <img src={project.image} alt={project.title} className="w-full object-cover mb-4 rounded" />
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50" onClick={closeProjectDetails}></div>
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10 max-w-lg w-full">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <h2 className="text-xl font-semibold">
                    {selectedProject.title} ({selectedProject.period})
                  </h2>
                  <button onClick={closeProjectDetails} className="text-gray-500 hover:text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full object-cover mb-4 rounded"
                  />
                  <p className="mb-2">{selectedProject.description}</p>
                  <h3 className="text-lg font-semibold mb-2">기술 스택:</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    상세 정보:{" "}
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font text-blue-500 ">
                      [{selectedProject.title}]
                    </a>
                  </h3>
                  <p>{selectedProject.details}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Career
