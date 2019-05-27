jQuery(document).ready(function($) {
	
	$(".mosaicholder").jPages({
      containerID: "mosaicContainer",
      previous : "←",
      next : "→",
      perPage:8,
      midRange: 3,
      direction: "random",
      animation: "flipInY"
    });
	
	$('.mosaic-gallery-link').viewbox();
	
});