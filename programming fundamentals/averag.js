let genres = ["Action","Comedy","Horror"]
let authors = ["Author 1","Author 2","Author 3"]
//json
let books = [ {
                bookName:"Game of Thrones",
                author:{
                    firstName :"Author first name1",
                    lastName : "Author last name1",
                    bookCount : 100,
                    awards : [
                        {
                            awardName:"Nobel ",
                            yearAwarded:"2000"
                        }
                    ]   
                },
                genre : "Action"
            }
            ,
            {
                bookName:"Harry Potter",
                author:{
                    firstName :"Author first name2",
                    lastName : "Author last name2",
                    bookCount : 200,
                    awards : [
                        {
                            awardName:"Nobel ",
                            yearAwarded:"2010"
                        },
                        {
                            awardName:"Nobel 2 ",
                            yearAwarded:"2020"
                        }
                    ]
                },
                genre : "Thriller"
            }
            ]
// console.log(books[0].author.lastName)
//Author xyz has following awards
//Award name = blah blah
for(i=0;i<books.length;i++){
    console.log("Author "+books[i].author.firstName+" has following awards")
    for(j=0;j<books[i].author.awards.length;j++){
        console.log("Award name = "+books[i].author.awards[j].awardName)
    }
}