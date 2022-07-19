let memberFrame = document.querySelectorAll(".member-frame");
let cardFrame = document.querySelectorAll(".card-frame");
let cardSection = document.getElementById("card-section");
let pageButton = document.querySelectorAll(".page-button");

function resetCards() {
    for (let i = 0; i < cardFrame.length; i++)
    {
        cardFrame[i].style.display = "none";
    }
}

function resetMembers() {
    for (let i = 0; i < memberFrame.length; i++)
    {
        //memberFrame[i].style.height = "0";
        memberFrame[i].style.display = "none";
    }
}

function showMember(indexMember) {
    let memberHeight = memberFrame[indexMember].scrollHeight;
    console.log(memberFrame[indexMember]);
    if (memberFrame[indexMember].style.display === "none") {
        resetMembers();
        memberFrame[indexMember].style.display = "";
        //memberFrame[indexMember].style.height = memberHeight  + "px";
        setTimeout(() => {
            memberFrame[indexMember].scrollIntoView({ block: 'start', behavior: 'smooth' });
        }, 500);
        
    }  
    else {
        hideMember(indexMember);
    }
}

function hideMember(indexMember) {
    // memberFrame[indexMember].style.height = "0";
    memberFrame[indexMember].style.display = "none";
    cardFrame[indexMember].scrollIntoView({ block: 'center', behavior: 'smooth' });
}

for (let k = 0; k < pageButton.length; k++)
{
    pageButton[k].addEventListener("click", event => {
        let index = Number(event.target.innerText);
        if (!isNaN(index)) {
            resetCards();
            resetMembers();
            for (let i = 0; i < pageButton.length; i++)
            {
                pageButton[i].classList.remove("active");
            }
            pageButton[index - 1].classList.add("active");
            
            if (index === 1)
            {
                for (let i = 0; i < 3; i++)
                {
                    cardFrame[i].style.display = "";
                }
                cardFrame[0].scrollIntoView({ block: 'center', behavior: 'smooth' }); 
            }
            else if (index === 2) {
                for (let i = 0; i < 2; i++)
                {
                    cardFrame[i + 3].style.display = "";
                }
                cardFrame[3].scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
            else {
                for (let i = 0; i < 2; i++)
                {
                    cardFrame[i + 5].style.display = "";
                }
                cardFrame[5].scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }
    });
}

resetCards();
resetMembers();
for (let i = 0 ; i < 3; i++)
{
    cardFrame[i].style.display = "";
}
