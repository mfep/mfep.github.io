window.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("renderCanvas");
  var engine = new BABYLON.Engine(canvas, true);

  BABYLON.SceneLoader.Load("/biplane/", "untitled.babylon", engine, function(newScene){
    newScene.executeWhenReady(function(){
      var camera = new BABYLON.ArcRotateCamera("cam", 0, -1, 15, new BABYLON.Vector3(0,0,0), newScene);
      camera.attachControl(canvas);
      engine.runRenderLoop(function(){newScene.render();});
    })
  })

  window.addEventListener("resize", function(){engine.resize();});
});
