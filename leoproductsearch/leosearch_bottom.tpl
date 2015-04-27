{*
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
*}

<!-- Block search module -->
<div id='searchModal' class='msearch'>
	<div class='msearch-container'>
		<div class='msearch-close'><i class='fa fa-2x fa-times-circle'></i></div>
		<div id="leo_search_block_top" class="exclusive">
			<form method="get" action="{$link->getPageLink('productsearch', true)|escape:'html':'UTF-8'}" id="leosearchtopbox">
				<input type="hidden" name="fc" value="module" />
				<input type="hidden" name="module" value="leoproductsearch" />
				<input type="hidden" name="controller" value="productsearch" />
				<input type="hidden" name="orderby" value="position" />
				<input type="hidden" name="orderway" value="desc" />
		    	<label class="searchHint" for="search_query_block">{l s='Enter Search Term:' mod='leoproductsearch'}</label>

				<p class="clearfix">
					<select class="col-lg-3 col-md-4 col-sm-4 col-xs-12" name="cate" id="cate">
						<option value="">{l s='All Categories'}</option>
					     {foreach $cates item = cate key= "key"}
					     <option value="{$cate.id_category|escape:'htmlall':'UTF-8'|stripslashes}" {if isset($selectedCate) && $cate.id_category eq $selectedCate}selected{/if} >{$cate.name}</option>
					     {/foreach}
		            </select>
					<input class="search_query col-lg-9 col-md-8 col-sm-8 col-xs-12 grey" type="text" id="leo_search_query_top" name="search_query" value="{$search_query|escape:'htmlall':'UTF-8'|stripslashes}" />
					{* <button type="submit" id="leo_search_top_button" class="btn btn-outline-inverse button button-small"><i class="fa fa-search"></i></button>  *}
				</p>
			</form>
		</div>
	</div>
</div>
<!-- /Block search module -->
