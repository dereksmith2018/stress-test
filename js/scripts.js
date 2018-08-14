
var stressLevel = 0;

$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=warningSigns]:checked").each(function() {
      stressLevel++;
    });
    $("input:checkbox[name=healthSymptoms]:checked").each(function() {
      stressLevel++;
    });
    $("input:checkbox[name=copingMethods]:checked").each(function() {
      stressLevel--;
    });
    if (stressLevel) {
      alert("You are a zen master, why did you even take this test?")
    } else if (stressLevel >= 0 && stressLevel <=2) {
      alert("You're not that stressed, quit bitching")
    } else if (stressLevel > 2 && stressLevel < 5) {
      alert("You're kinda stressed. Keep doing those coping methods")
    } else {
      alert("You need help, you're stressed bro. Xanax?")
    }
  });
});
