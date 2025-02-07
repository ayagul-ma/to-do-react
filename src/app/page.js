// import Image from "next/image";
// import styles from "./page.module.css";
// import Title from './components/title/index.js'
// import Input from './components/input/index.js'
// import Tabs from './components/tabs/index.js';

// export default function Home() {
//   return (
//     <div className= {styles.container}>
//       <div className={styles.cardContainer}>
//        <Title/>
//        <Input/>
//        <Tabs />
//        </div>
//     </div>
    
//   );
// }

// export default function Home() {
//   return (
//     <div className="card-container">
//       <div>
//           <h1 className="Title">To-Do-list</h1>
//       <div>
//       <input placeholder="Add a new task.."/>
//       <button>Add</button>
//       </div>
//       <div className="filter-buttons">
//           <button className="">All</button>
//           <button>Active</button>
//           <button>Completed</button>
//       </div>
//       <div>
//           <p>No tasks yet. Add one above!</p>
//       </div>
//       <footer>
//           <span>Powered by</span>
//           <span className="pinecone">Pinecone academy </span>
//       </footer>
//       </div>
//     </div>
//   )
// }

'use cilent'
import styles from './page.module.css';

export default function Page () {
  const status = "All";

 
   return (
    <div className={styles.page}>
      <div style={{ display: "flex", gap :10}} >
        <button className= {`btn ${status === 'All' ? 'btn-active' : '' }`}>All</button>
        <button className={`btn ${status === 'All' ? 'btn-active' : '' }`}>Active</button>
        <button className={`btn ${status === 'All' ? 'btn-active' : '' }`}>Completed</button>
      </div>
    </div>
   )
}