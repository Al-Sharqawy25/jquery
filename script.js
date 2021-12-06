// $(document).ready(function () {
//   // {{{{{{{{{{{events and effects}}}}}}}}}}}
//   //   $(p);
//   //   $(".elem");
//   //   $("#demo");
//   //   $("button").click(() => {
//   //     $("section").hide(2000);
//   //   });
//   //   $("button").click(() => {
//   //     $("section").show(2000);
//   //   });
//   //   $("button").click(() => {
//   //     $("section").toggle(1000);
//   //   });
//   //   $("button").click(() => {
//   //     $("section").fadeOut(1000);
//   //   });
//   //   $("button").click(() => {
//   //     $("section").fadeIn(1000);
//   //   });
//   //   $("button").click(function () {
//   //     $("section").fadeToggle(1000);
//   //   });
//   //   $("button").click(function () {
//   //     $("section").slideUp(1000);
//   //   });
//   //   $("button").click(function () {
//   //     $("section").slideUp(1000);
//   //   });
//   //   $(".start").click(function () {
//   //     $("section").slideToggle(3000);
//   //   });
//   //   $(".stop").click(function () {
//   //     $("section").stop();
//   //   });
//   //   $(".stop").click(function () {
//   //     $("section").hide(1000, () => {
//   //       console.log("hello world");
//   //     });
//   //   });
//   //   $(".stop").click(function () {
//   //     $("section").hide(1000).show(1000).slideUp(3000);
//   //   });
//   // $("button").click(function () {
//   //   $("section").animate({
//   //     top: "300px",
//   //     width: "400px",
//   //   });
//   // });
//   // {{{{{{DOM manipulation}}}}}}}
//   // const myVar = $("#demo").text();
//   // console.log(myVar);
//   //or
//   // console.log($("#demo").text());  //GET
//   // $("#demo").text("This Is Another Way");  //SET
//   // console.log($("#demo").html()); //GET
//   // $("#demo").html("<h3> This Is Another Method </h3>"); //SET
//   // console.log($("input").val()); //GET
//   // $("input").val("Ali"); //SET
//   // console.log($("#demo").attr("id")); //GET
//   // $("#demo").attr("id", "test"); //SET
//   // console.log($("input").attr("type")); //GET
//   // $("#demo").append(" hello world"); //ADD AFTER
//   // $("#demo").prepend("hello world "); //ADD BEFORE
//   // $("#demo").after("hello world "); //ADD BEFORE
//   // $("#demo").before("hello world "); //ADD BEFORE
//   // $("p").remove();  // REMOVE
//   // $("p").addClass("myNewClass");
//   // $("p").removeClass("myNewClass");
//   // $("button").click(function () {
//   //   $("p").toggleClass("test");
//   // });
//   // $("button").on("click", function () {
//   //   $("p").toggleClass("test");
//   // });
//   // $("button").on("click", function () {
//   //   $("p").css({
//   //     fontSize: "20px",
//   //     color: "blue",
//   //     backgroundColor: "yellow",
//   //     border: "3px solid black",
//   //   });
//   // });
// });
$(function () {
  // {{{{{{traversing}}}}}}
  // $("span").parent().css("border", "2px solid red");
  // $("li").parent().css({
  //   border: "3px solid green",
  // });
  // $("span").parents().css("border", "3px solid blue");
  // $("section").children().css("border", "3px solid blue");
  // $("section").children("ul").css("border", "3px solid blue");
  // $("section").children("p").css("border", "3px solid blue");
  // $("section").children("div").css("border", "3px solid blue");
  // $("section").find("ul").css("border", "3px solid blue");
  // $("section").find("li").css("border", "3px solid blue");
  // $("p").siblings().css("border", "3px solid blue");
  // $("p").next().css("border", "3px solid blue");
  // $("p").next().css("border", "3px solid blue");
  // $("div").prev().css("border", "3px solid blue");
  // $("p").siblings("ul").css("border", "3px solid blue");
  // $("div").nextAll().css("border", "3px solid blue");
  // $("span").prevAll().css("border", "3px solid blue");
  // $("ul").prevUntil("p").css("border", "3px solid blue");
  // $("p").nextUntil("ul").css("border", "3px solid blue");
  // $("p").first("ul").css("border", "3px solid blue");
  // $("p").last("ul").css("border", "3px solid blue");
  // $("p").eq(1).css("border", "3px solid blue");
  // $("p").eq(2).css("border", "3px solid blue");
  // $("p").filter(".test").css("border", "3px solid blue");
  $("p").not(".test").css("border", "3px solid blue");
});

// $(function () {
//   $("div");
// });
