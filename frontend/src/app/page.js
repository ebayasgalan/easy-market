// export { default } from './products/page';
import { keystoneContext } from '../keystone/context';

async function getProjects() {
    const res = await fetch(`https://dummy.restapiexample.com/api/v1/employees`, { cache: 'no-store' });
    const projects = await res.json();
   
    return projects;
  }
   
export default async () => {
    const session = {};
    const users = await keystoneContext.withSession(session).query.User.findMany({
        query: 'id name',
      });
    // const projects = await getProjects();
    console.log('users: ', users);

    // return (
    //   <ul>
    //     {projects.map((project) => (
    //       <li key={project.id}>{project.name}</li>
    //     ))}
    //   </ul>
    // );
}