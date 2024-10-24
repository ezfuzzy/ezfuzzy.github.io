import React, { useState } from "react"
import { X } from "lucide-react"
import { myLinkList, projectList, skillList } from "../../constants/mapping"

const Career = () => {
  const [filter, setFilter] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectList.filter(
    (project) =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
  )

  const openProjectDetails = (project) => setSelectedProject(project)
  const closeProjectDetails = () => setSelectedProject(null)

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">김민준 - ezfuzzy's career</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className="flex space-x-4">
            {myLinkList.map(({ href, alt, src }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className="w-12 h-12" />
              </a>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            백엔드 개발자 김민준(ezfuzzy)입니다. 저는 개발하면서 작성한 로직을 어떻게 최적화할지 고민하는 것을
            좋아합니다.
            <br />
            <span className="font-semibold">Java</span>와 <span className="font-semibold">Spring Boot</span>를 사용하여
            프로젝트를 구성해보았고, <span className="font-semibold">React</span>를 프론트엔드로 하여 프로젝트를
            진행했습니다.
            <br />
            또한 <span className="font-semibold">PostgreSQL</span>과 같은 RDBMS뿐만 아니라{" "}
            <span className="font-semibold">AWS</span>, <span className="font-semibold">Docker</span>와 같은 클라우드 및
            컨테이너 기술에 대한 이해를 바탕으로 배포와 운영에 대한 최적화에도 신경을 쓰고 있습니다. <br />
            AWS는 Redis를 통한 DB 접근에 대한 최적화를 하였고, <span className="font-semibold">Github Actions</span>를
            통해 CI/CD를 구축했습니다.
            <br />
            항상 새로운 기술을 탐구하고, 사용자 경험을 향상시키는 개발에 도전하는 것을 즐기며, 프로젝트에서 팀원들과
            협업하여 성공적인 결과를 이끌어 내는 것에 관심이 많습니다.
            <br />더 나은 서비스를 만들고, 더 많은 사람들에게 가치를 제공하기 위해 계속해서 성장하고 있습니다.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            {Object.entries(skillList).map(([category, items]) => (
              <li key={category}>
                <span className="font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                <span className="flex items-center space-x-2 mt-2">
                  {items.map((item) => (
                    <img key={item.alt} src={item.src} alt={item.alt} className="w-12 h-12" title={item.title} />
                  ))}
                </span>
              </li>
            ))}
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
                  <h3 className="text-lg font-semibold mb-2">상세 정보:</h3>
                  <span>Github : </span>
                  <a
                    href={selectedProject.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font text-blue-700 mb-2">
                    [{selectedProject.title}]
                  </a>
                  {selectedProject.link2 && (
                    <div className="mb-2">
                      <span>Site: </span>
                      <a
                        href={selectedProject.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font text-blue-700">
                        {selectedProject.link2}
                      </a>
                    </div>
                  )}
                  {selectedProject.pdf && (
                    <div className="mb-2">
                      <span>PDF: </span>
                      <a
                        href={selectedProject.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font text-blue-700">
                        {selectedProject.pdf}
                      </a>
                    </div>
                  )}
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
