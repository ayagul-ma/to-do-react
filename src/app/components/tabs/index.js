import styles from './index.module.css'

function Tab(props) {
    return(
      <div>
        <button>{props.option}</button>
      </div>  
    )
}

const Tabs = () => {
    const TABS = ['All', 'Active', 'Completed'];

    return (
        <div className={styles.tabsContainer}>
            {TABS.map( (tab) =>{
                return (
                    <Tab option={tab} />
                )
            }) 

            }
        </div>
    )
    
}
export default Tabs 