import { ListHeader } from "./ListHeader";

export function ListTask(){
  return(
    <div>
      <header>
        <ListHeader progress={20}/>
      </header>
    </div>
  )
}