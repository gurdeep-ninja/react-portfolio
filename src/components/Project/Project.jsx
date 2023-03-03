function Project(props){
    console.log(props)
    const {id, title, github, image} = props;
    return <h2>{id}</h2>
}

export default Project;