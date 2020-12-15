const router = require('express').Router();
const fs = require('fs')




//Read Json file and paginate 10 items per page (english version)
router.route('/en/:step').get( (req,res)=>{
      fs.readFile('./dataset_en.json',  (err, data) => {
        let step = req.params.step;
        
        if (err) 
        {
            return res.status(400).json('Error');
        }
       
       
       
       // console.log(step)
        let words = JSON.parse(data);
        let page=parseInt(step)+10;
       
        if(step == 0 || step ==10 || step == 20 || step ==30 || step == 40 ){
            console.log(step)
            let results = words.results.slice(step,page).map((item)=>{
                 
                 return item;     
                })
                res.status(200).json(results)

        }
        else return res.status(400).json('error')
       
    });
    
})
////Read Json file and paginate 10 items per page (frensh version)
router.route('/fr/:step').get((req,res)=>{
    fs.readFile('./dataset_fr.json',(err, data) => {
         if (err) 
         {
             return res.status(400).json('Error');
         }
        
         let step = req.params.step;
         
         console.log(step)
         let words = JSON.parse(data);
         let page=parseInt(step)+10;
         if(step == 0 || step ==10 || step == 20 || step ==30 || step == 40 ){
             let results =words.results.slice(step,page).map((item)=>{
               
                  return item;     
                 })
                 res.status(200).json(results)
 
         }
         else return res.status(400).json('error')
          
     });
     
 })
















module.exports = router;