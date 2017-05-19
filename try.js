var Table = require('cli-table');

  

          var table = new Table({
            head: ['YEAR', 'Movies'],
            colWidths: [10,20]
          });

          
            table.push([
              'result._id',
              'result.movies'
            ]);
       

         
            console.log(table.toString());


                        
            