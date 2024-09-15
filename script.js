document.addEventListener("DOMContentLoaded", () => {
    const stages = document.querySelectorAll(".stage");
    let currentStage = 0;

    function nextStage() {
        if (currentStage > 0) {
            stages[currentStage - 1].classList.remove("active");
        }
        stages[currentStage].classList.add("active");
        currentStage++;

        if (currentStage < stages.length) {
            setTimeout(nextStage, 1000); // 1 second delay for each stage
        } else {
            setTimeout(() => {
                stages.forEach(stage => stage.classList.remove("active"));
                currentStage = 0;
                nextStage();
            }, 2000); // Wait 2 seconds before starting the loop again
        }
    }

    nextStage();
});
