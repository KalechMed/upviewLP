
import React, { useState, useEffect } from "react";
import {  Navbar ,Footer } from "../components";
import { Avatar } from "@nextui-org/react";
import { AiOutlineStar } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import {IoMdAddCircleOutline} from "react-icons/io";
import {AiFillGithub} from "react-icons/ai";
import {BiGitBranch} from "react-icons/bi";
import { useNavigate } from "react-router-dom";






const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];



//project details function

function ProjectDetails({ _id }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details from API based on projectId prop
    // and update state
    async function fetchProject() {

      const response = await fetch(`http://localhost:9090/projects/${_id}`);
      const data2 = await response.json();
      setProject(data2);
    }
    fetchProject();
  }, [_id]);

  if (!project) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    
    <div className="container p-5">
    <div className="flex justify-start items-center justify-between">
<div className="flex items-center gap-6">
  <p className="text-white text-[32px]">{project.projectName}</p>
  <FiEdit color="white" size={25}/>
</div>
<div className="flex gap-3">
<button class="flex items-center text-white  font-regular py-2 px-4 bg-[#212121] border border-solid border-[#363636] rounded-xl">
 
  View Code
</button>
  <button class="flex items-center text-white  font-regular py-2 px-4 bg-[#21AFDA] border border-solid border-[#363636] rounded-xl">
 
  Live Preview
</button>
</div>
    </div>
    <div className="flex items-center gap-5 py-3">
    <img src={project.projectLogo} width={70} alt={project.projectName} />
      <div className="gap-5">
        <p className="text-white">Innoverse team</p>
<Avatar.Group count={3} className="p-2">
          {pictureUsers.map((url, index) => (
            <Avatar cl
              key={index}
              size="xs"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
             
            />
          ))}
        </Avatar.Group>
      </div>
    </div>
    <div class="container mx-auto">
    <div className="card text-white">
            <div className="flex flex-wrap gap-4 mb-4 border-2  border-transparent border-b-[#343434]">
                <Button onClick={() =>{ setActiveIndex(0); }} className="p-button-text  text-[#57B7F4] border-2  border-transparent border-b-[#57B7F4]" label="Projects Details" />
                <Button onClick={() => setActiveIndex(1)} className="p-button-text "  label="Deployment" />
                <Button onClick={() => setActiveIndex(2)} className="p-button-text " label="Settings" />
            </div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel >
                   
        <div class="tab-container w-[1100px]">
          <div class="tab-content">
            <h2 class="text-md font-semibold mb-4 text-white">Project description</h2>
            <p className="text-white">{project.projectDescription}</p>
            <h2 class="text-md font-semibold mb-4 mt-4 text-white">Technologies used</h2>
            <p className="text-white"><Avatar.Group count={3} className="px-2">
          {pictureUsers.map((url, index) => (
            <Avatar cl
              key={index}
              size="sm"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
             
            />
          ))}
        </Avatar.Group></p>
        <h2 class="text-md font-semibold mb-4 text-white pt-4">Project screenshots</h2>
        <div className="flex gap-10">        <img className="h-[200px]"
                      src={project.projectScreenshots[0]}
                      width={250}
                      height={120}
                      alt={project.projectName}
                    />
                    <img className="h-[200px]"
                      src={project.projectScreenshots[1]}
                      width={250}
                      height={120}
                      alt={project.projectName}
                    />
                    <img className="h-[200px]"
                      src={project.projectScreenshots[2]}
                      width={250}
                      height={120}
                      alt={project.projectName}
                    />
                     <img className="h-[200px]"
                      src={project.projectScreenshots[3]}
                      width={250}
                      height={120}
                      alt={project.projectName}
                    />
        <div class="w-[250] bg-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-300 flex items-center justify-center">
  <GrFormAdd className="text-gray-700 text-2xl" />
</div>

</div>

          </div>
          <div class="tab-content hidden">
            <h2 class="text-2xl font-bold text-white">Tab 2 content</h2>
            <p>Aliquam erat volutpat. Sed dictum ultrices magna, id efficitur turpis aliquet vel. Quisque eget leo nisi.</p>
          </div>
          <div class="tab-content hidden">
            <h2 class="text-2xl font-bold mb-4 text-white">Tab 3 content</h2>
            <p>Praesent pulvinar lobortis sem vel maximus. Suspendisse potenti. Integer vel justo ut nunc elementum molestie.</p>
          </div>
        </div>
                </TabPanel>
                <TabPanel >
                <div class="tab-container w-[1100px]">
          <div class="tab-content ">
            <div className="flex p-2 justify-start items-center">
              <div className="w-[300px] h-[200px] border-1 border-[#262626] bg-[#1E1E1E] flex  justify-center items-center m-2">
              <img className="h-[200px]"
                      src={project.projectScreenshots[0]}
                      width={200}
                      height={120}
                      alt={project.projectName}
                    />
                   
                 </div>
          <div className="">
          <div className="p-1 text-[#9C9B9B]">DEPLOYMENT URL</div>
          <div className="p-1">{project.previewLink}</div>
          <div className="p-1 text-[#9C9B9B]">STATUS</div>
          <div className="p-1 ">Active</div>
          <div className="p-1 text-[#9C9B9B]">BRANCHE</div>
          <div className="p-1 flex justify-start items-center gap-3"><AiFillGithub size={22}/>{project.gitLink}</div>
          </div>
          </div>
          <div>
            <p className="text-[20px]">Active Branche</p>
            <p className="text-14 text-[#9C9B9B]">Branch connected to upview repository</p>
            <div className="container w-[1100px] h-[80px] mt-4 border-1 border-[#262626] bg-[#1E1E1E] flex justify-between items-center">
          <div className="flex justify-start items-center gap-4 ml-6">  <BiGitBranch/> <p>{project.gitLink} deployed {project.createdAt.toString()} ago by upview</p></div>  
          <div className="mr-6"><FiMoreVertical/></div>
            </div>
          </div>

          </div>
          </div>
                </TabPanel>

                <TabPanel>
                    <p className="m-0 text-[30px]">
                     Settings section

                    </p>
                    <div className="py-10">                    <p >Project Visibility :</p>
</div>
                </TabPanel>
            </TabView>
        </div>

</div>

   
    </div>
    
  );
}







//================================================================================

const Projects = () => {


    const navigate = useNavigate();
  
    //API Fetching
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
   
    const handleSearch = () => {
        const filteredCards = data.filter((card) =>
          card.projectName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if(filteredCards != ""){
        setData(filteredCards);
        }
        else 
        {
          setData(actualData);
        }
      };
   
 
  
  
     function handleCardClick(projectId) {
      setSelectedProjectId(projectId, () => {
        console.log(selectedProjectId);
      });
    }
    useEffect(() => {
      console.log(selectedProjectId);
    }, [selectedProjectId]);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const options = {
            
          };
          const response = await fetch(`http://localhost:9090/projects/public`);
  
       
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          setData(actualData);
          setError(null);
        } catch(err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }  
      }
      getData()
        
    }, []);

  const [branchName, setBranchName] = useState("");
  const handleBranchNameChange = (event) => {
    setBranchName(event.target.value);
  };

  return (
    <div className="bg-gray-900 h-full ">
      <div className="flex justify-center items-center">
        <Navbar />
      </div>

      <div className="text-white font-poppins font-medium text-center text-3xl mt-[100px]">
        Find live previews of projects in any technology
      </div>

      <div className="flex mt-[50px] flex flex-col justify-center items-center">
        <div className="  flex ">
          <div className=" bg-[#3C3C3C] gap-2 p-2 border-1 border-[#757575] rounded-md w-[300px] w-[600px] ">
            <input
              className="text-sm text-white bg-transparent outline-none font-poppins w-full"
              type="text"
              placeholder="search "
              style={{ color: "#ffffff" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

         

          <button className="bg-blue-500 hover:bg-[#21AFDA] text-white font-bold py-2 px-3 rounded-lg square h-10 w-10 ml-3"
          onClick={handleSearch} >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="bg-[#21AFDA] w-full  flex justify-center items-center mt-[80px]">
  <div class="text-center flex mt-10 mb-10  justify-center items-center">
    <h1 class="text-white font-poppins text-[15px]  mr-3">Create an account for a real-life preview of the projects</h1>
    <button class="bg-white rounded-lg px-8 py-1 text-blue-500" onClick={() => {window.location.href = 'http://localhost:3000/signup';}} >
      
      Sign up
      
    </button>
  </div>
</div>

<div>
      {selectedProjectId ? (
        <ProjectDetails _id={selectedProjectId} />
      ) : (
      <div className="-mx-auto ">
  
  
      <div className="w-full flex flex-wrap gap-5 items-center justify-center ">
                 
                  
       
        {loading && <div className="text-white">A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        
          {data &&
            data.map((projects) => {
              return (
                <div class="mt-10 ml-5 mr-1 mb-20" >
                <div className=" w-[300px] bg-[#212121] border border-solid border-[#363636] rounded-xl" key={projects.id} onClick={async () => await handleCardClick(projects._id)}>
                    <div className="card-body flex justify-between items-center ">
                      <ul>
                     
                      <li className="border border-solid border-[#363636] rounded-xl p-4"><img className="w-[400px] h-[200px]" src={projects.projectScreenshots[0]} alt="" /></li>
                      <li > <div className="userName flex justify-between items-center text-white px-3 pt-3"><p className="font-normal font-sans">{projects.projectName}</p></div></li>
                      <li> <div className="userUrl flex justify-between items-center px-3 py-3"><p className="font-hairline font-sans text-white opacity-70">{projects.projectDescription}</p>
          <Avatar.Group count={3}>
            {pictureUsers.map((url, index) => (
              <Avatar cl
                key={index}
                size="xs"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
               
              />
            ))}
          </Avatar.Group>
          
       </div></li>  
                       
                       
                      </ul>
                        
                    </div>
  
                </div></div>
            )
              
  })}
        
      </div></div> )}
      <Footer />
      </div>


    </div>
    
  );
};

export default Projects;














