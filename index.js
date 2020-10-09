import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateItemPage from './generateItemPage.js';
import generateCartPage from './generateCartPage.js';
import {catalog} from './main.js';
//import {loadData} from './loadData.js';
import './storage.js';

generateHeader()
generateFooter();
generateCatalog();
generateSubCatalog();
generateGoodsPage();
generateItemPage();
generateCartPage();
catalog();
//loadData();
