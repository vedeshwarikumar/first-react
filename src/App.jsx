import Header from "./header"
import Entry from "./entry"
import data from "./data"

const entryData = data.map((entry)=>{
   return(
      <Entry
         img = {entry.img}
         name = {entry.name}
         googleLink = {entry.googleLink}
         date = {entry.date}
         text = {entry.text}

      />
   )
})
export default function App(){
   return (
   <>
        <Header />
        <main className="container">
            {entryData}
        </main>
   </>
)
}
