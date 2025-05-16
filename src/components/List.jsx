const List=({list})=>
{
    return <ul className="list-disc mx-5">
        {list.map((item)=><li>{item}</li>)}
     
    </ul>;
}
export default List;