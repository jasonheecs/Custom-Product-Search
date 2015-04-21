/*
* 2007-2014 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2014 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

var instantSearchQueries = [];
$(document).ready(function()
{
	/* TODO Ids aa blocksearch_type need to be removed*/
	
	if (typeof ajaxsearch != 'undefined' && ajaxsearch && typeof blocksearch_type !== 'undefined' && blocksearch_type){
		var width_ac_results = 	$("#leo_search_query_" + blocksearch_type).parent('form').width();
		$("#leo_search_query_" + blocksearch_type).autocomplete(
			search_url,
			{
				minChars: 3,
				max: 10,
				width: (width_ac_results > 0 ? width_ac_results : 500),
				selectFirst: false,
				scroll: false,
				dataType: "json",
				formatItem: function(data, i, max, value, term) {
					return value;
				},
				parse: function(data) {
					var mytab = new Array();
					for (var i = 0; i < data.length; i++)
						mytab[mytab.length] = { data: data[i], value: '<IMG align = "center" width = "20px" SRC=' + data[i].image_link + '>' + '  ' + data[i].pname };
					return mytab;
				},
				extraParams: {
					ajaxSearch: 1,
					id_lang: id_lang
				}
			}
		)
		.result(function(event, data, formatted) {
			$('#leo_search_query_' + blocksearch_type).val(data.pname);
			document.location.href = data.product_link;
		});
	}

	ModalSearch.init();
});

function tryToCloseInstantSearch()
{
	if ($('#old_center_column').length > 0)
	{
		$('#center_column').remove();
		$('#old_center_column').attr('id', 'center_column');
		$('#center_column').show();
		return false;
	}
}

function stopInstantSearchQueries()
{
	for(i=0;i<instantSearchQueries.length;i++)
		instantSearchQueries[i].abort();
	instantSearchQueries = new Array();
}

var ModalSearch = (function($) {
	"use strict";

	var $modalContainer;

	function showModal() {
		$modalContainer.addClass("msearch-show");
	}

	function hideModal() {
		$modalContainer.removeClass("msearch-show");
	}

	function init() {
		$(function() {
			$modalContainer = $("#searchModal");

			$("#searchTrigger").focus(function() {
				showModal();
				$("#leo_search_query_top").val("").focus();
			});

			$modalContainer.find(".msearch-close").click(function() {
				hideModal();
			});
		});
	}

	return {
		init: init
	};
})(jQuery);
