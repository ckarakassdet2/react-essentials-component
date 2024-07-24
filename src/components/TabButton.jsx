
export default function TabButton({children, onSelect}){
   console.log("TABBUTTON COMPONENT EXECUTED."); 
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}