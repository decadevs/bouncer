
const backgroundColor = ({ theme, ...props }) => {
    const colorSet = Object.keys(theme.colors);
  const color = Object.keys(props).filter(color => colorSet.includes(color));  
  return `
    background-color:${theme.colors[color[0]]||theme.colors.primary}
`;
};
export const color = ({theme, ...props}) =>{
    const colorSet = Object.keys(theme.colors);

    let color = Object.keys(props).filter(color =>{
       
        if(color.includes("Color")){
            const ic=color.split("Color")[0]
           return colorSet.includes(ic)
        }else{
            return false
        }
        });          
        color=color[0].split("Color")[0] || "Primary"
   
   return`
   color:${theme.colors[color]||"red"}
   `
}
export default backgroundColor
