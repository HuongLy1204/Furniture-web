
import axiosClient from "./axiosClient"

 const projectsApi={
getAll(){
    const url="/projects"
    return axiosClient.get(url)
},
createProject(body){
    const url="/create-project"
    return axiosClient.post(url,body)
},
updateProject(body,id){
    const url =`/project/${id}`
    return axiosClient.put(url,body)
},
deleteProject(id){
    const url=`/project/${id}`
    return axiosClient.delete(url)
}
}
export default projectsApi