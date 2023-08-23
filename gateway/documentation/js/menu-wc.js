'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gateway documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryGatewayModule.html" data-type="entity-link" >CategoryGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryGatewayModule-b55c362874fc961d60eeec59ba1a88e4988b07ef041a3a7c6b7243ab861a47e5a3226abec7c7efb998af342898b2709adf43d1a7be898f9ef175329b213b62ac"' : 'data-bs-target="#xs-controllers-links-module-CategoryGatewayModule-b55c362874fc961d60eeec59ba1a88e4988b07ef041a3a7c6b7243ab861a47e5a3226abec7c7efb998af342898b2709adf43d1a7be898f9ef175329b213b62ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryGatewayModule-b55c362874fc961d60eeec59ba1a88e4988b07ef041a3a7c6b7243ab861a47e5a3226abec7c7efb998af342898b2709adf43d1a7be898f9ef175329b213b62ac"' :
                                            'id="xs-controllers-links-module-CategoryGatewayModule-b55c362874fc961d60eeec59ba1a88e4988b07ef041a3a7c6b7243ab861a47e5a3226abec7c7efb998af342898b2709adf43d1a7be898f9ef175329b213b62ac"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-d19a81261c21c2ae5ea97b6ff06e8bd4b550ef6b88c010c1ee38a35fca7b839b370a9e44b67a1e12d662ee38806f25f334482a9c0aedf518ab50a36d10df70d9"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-d19a81261c21c2ae5ea97b6ff06e8bd4b550ef6b88c010c1ee38a35fca7b839b370a9e44b67a1e12d662ee38806f25f334482a9c0aedf518ab50a36d10df70d9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-d19a81261c21c2ae5ea97b6ff06e8bd4b550ef6b88c010c1ee38a35fca7b839b370a9e44b67a1e12d662ee38806f25f334482a9c0aedf518ab50a36d10df70d9"' :
                                        'id="xs-injectables-links-module-CategoryModule-d19a81261c21c2ae5ea97b6ff06e8bd4b550ef6b88c010c1ee38a35fca7b839b370a9e44b67a1e12d662ee38806f25f334482a9c0aedf518ab50a36d10df70d9"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderGatewayModule.html" data-type="entity-link" >OrderGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderGatewayModule-b587763ccc802770fe31cdbd8da90d0bc46542467596a40ca85281ef59995dd8c820dda5a7b2849e7a943d9091d0f6f7b9f01048643857b7e960d6da822ddaf5"' : 'data-bs-target="#xs-controllers-links-module-OrderGatewayModule-b587763ccc802770fe31cdbd8da90d0bc46542467596a40ca85281ef59995dd8c820dda5a7b2849e7a943d9091d0f6f7b9f01048643857b7e960d6da822ddaf5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderGatewayModule-b587763ccc802770fe31cdbd8da90d0bc46542467596a40ca85281ef59995dd8c820dda5a7b2849e7a943d9091d0f6f7b9f01048643857b7e960d6da822ddaf5"' :
                                            'id="xs-controllers-links-module-OrderGatewayModule-b587763ccc802770fe31cdbd8da90d0bc46542467596a40ca85281ef59995dd8c820dda5a7b2849e7a943d9091d0f6f7b9f01048643857b7e960d6da822ddaf5"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-a4a5e8690c77ccf8fda5c7597e50538b60593ff7b4cb2b681d88d0154bb2b1580dcf306b5e4711183dbd41aaf8dfb7bb99b64f1bc8c12798897857cb1b3ab085"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-a4a5e8690c77ccf8fda5c7597e50538b60593ff7b4cb2b681d88d0154bb2b1580dcf306b5e4711183dbd41aaf8dfb7bb99b64f1bc8c12798897857cb1b3ab085"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-a4a5e8690c77ccf8fda5c7597e50538b60593ff7b4cb2b681d88d0154bb2b1580dcf306b5e4711183dbd41aaf8dfb7bb99b64f1bc8c12798897857cb1b3ab085"' :
                                        'id="xs-injectables-links-module-OrderModule-a4a5e8690c77ccf8fda5c7597e50538b60593ff7b4cb2b681d88d0154bb2b1580dcf306b5e4711183dbd41aaf8dfb7bb99b64f1bc8c12798897857cb1b3ab085"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductGatewayModule.html" data-type="entity-link" >ProductGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductGatewayModule-1dcafc404bcb6dfd02d9a3f4896594df83d0cf1118b647babd5fd431cf70af3fdfc759d0a4c60f1be0fd6d23b9dd99ae91589145d732f75224e2238cd9825dbe"' : 'data-bs-target="#xs-controllers-links-module-ProductGatewayModule-1dcafc404bcb6dfd02d9a3f4896594df83d0cf1118b647babd5fd431cf70af3fdfc759d0a4c60f1be0fd6d23b9dd99ae91589145d732f75224e2238cd9825dbe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductGatewayModule-1dcafc404bcb6dfd02d9a3f4896594df83d0cf1118b647babd5fd431cf70af3fdfc759d0a4c60f1be0fd6d23b9dd99ae91589145d732f75224e2238cd9825dbe"' :
                                            'id="xs-controllers-links-module-ProductGatewayModule-1dcafc404bcb6dfd02d9a3f4896594df83d0cf1118b647babd5fd431cf70af3fdfc759d0a4c60f1be0fd6d23b9dd99ae91589145d732f75224e2238cd9825dbe"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-03c4fc3045c1982dda2d5670f40f471c8ae739a5e8135c89fb261528d146c3ff04bb391825818845990363b7250e37fb174fdf3cc3a0219efd6e414f8cd5504e"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-03c4fc3045c1982dda2d5670f40f471c8ae739a5e8135c89fb261528d146c3ff04bb391825818845990363b7250e37fb174fdf3cc3a0219efd6e414f8cd5504e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-03c4fc3045c1982dda2d5670f40f471c8ae739a5e8135c89fb261528d146c3ff04bb391825818845990363b7250e37fb174fdf3cc3a0219efd6e414f8cd5504e"' :
                                        'id="xs-injectables-links-module-ProductModule-03c4fc3045c1982dda2d5670f40f471c8ae739a5e8135c89fb261528d146c3ff04bb391825818845990363b7250e37fb174fdf3cc3a0219efd6e414f8cd5504e"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubCategoryGatewayModule.html" data-type="entity-link" >SubCategoryGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubCategoryGatewayModule-136fd97b21495407ce11d1dfd8190b8cfeb4f09c893047054c79bfa627916c895f57fa01930be0db41e032272f8bc7e67b65145a0807da37fb6125e3fc7c638b"' : 'data-bs-target="#xs-controllers-links-module-SubCategoryGatewayModule-136fd97b21495407ce11d1dfd8190b8cfeb4f09c893047054c79bfa627916c895f57fa01930be0db41e032272f8bc7e67b65145a0807da37fb6125e3fc7c638b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubCategoryGatewayModule-136fd97b21495407ce11d1dfd8190b8cfeb4f09c893047054c79bfa627916c895f57fa01930be0db41e032272f8bc7e67b65145a0807da37fb6125e3fc7c638b"' :
                                            'id="xs-controllers-links-module-SubCategoryGatewayModule-136fd97b21495407ce11d1dfd8190b8cfeb4f09c893047054c79bfa627916c895f57fa01930be0db41e032272f8bc7e67b65145a0807da37fb6125e3fc7c638b"' }>
                                            <li class="link">
                                                <a href="controllers/SubCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubCategoryModule.html" data-type="entity-link" >SubCategoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubCategoryModule-b41b4214ddc4e74aeda345e657ad8e8a2399d708d20ff4c63ad984ae408f48949ae3a2c1a3ce15dde58a3ba80885fde97db00e24244f3135d0cc529f3344e498"' : 'data-bs-target="#xs-injectables-links-module-SubCategoryModule-b41b4214ddc4e74aeda345e657ad8e8a2399d708d20ff4c63ad984ae408f48949ae3a2c1a3ce15dde58a3ba80885fde97db00e24244f3135d0cc529f3344e498"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubCategoryModule-b41b4214ddc4e74aeda345e657ad8e8a2399d708d20ff4c63ad984ae408f48949ae3a2c1a3ce15dde58a3ba80885fde97db00e24244f3135d0cc529f3344e498"' :
                                        'id="xs-injectables-links-module-SubCategoryModule-b41b4214ddc4e74aeda345e657ad8e8a2399d708d20ff4c63ad984ae408f48949ae3a2c1a3ce15dde58a3ba80885fde97db00e24244f3135d0cc529f3344e498"' }>
                                        <li class="link">
                                            <a href="injectables/SubCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserGatewayModule.html" data-type="entity-link" >UserGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' : 'data-bs-target="#xs-controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' :
                                            'id="xs-controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserGetGatewayModule.html" data-type="entity-link" >UserGetGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserGetGatewayModule-af3e050cb28878763106c616f3269349ee161ee08dbf6bd1e059fa412667efb4d67083f84a7158ad75e40f56262a237f2c69401ef66f6ef9ccb74a23311318a2"' : 'data-bs-target="#xs-controllers-links-module-UserGetGatewayModule-af3e050cb28878763106c616f3269349ee161ee08dbf6bd1e059fa412667efb4d67083f84a7158ad75e40f56262a237f2c69401ef66f6ef9ccb74a23311318a2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserGetGatewayModule-af3e050cb28878763106c616f3269349ee161ee08dbf6bd1e059fa412667efb4d67083f84a7158ad75e40f56262a237f2c69401ef66f6ef9ccb74a23311318a2"' :
                                            'id="xs-controllers-links-module-UserGetGatewayModule-af3e050cb28878763106c616f3269349ee161ee08dbf6bd1e059fa412667efb4d67083f84a7158ad75e40f56262a237f2c69401ef66f6ef9ccb74a23311318a2"' }>
                                            <li class="link">
                                                <a href="controllers/UserGetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserGetController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserGetModule.html" data-type="entity-link" >UserGetModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserGetModule-5d73dc9b3afd45e4eb6c7c85480fd215842525c852d7b90771a0af4733a105d4de7b83735e29c29ae820f8858296f5f77736341e4789bafb0b91dc55c43ba939"' : 'data-bs-target="#xs-injectables-links-module-UserGetModule-5d73dc9b3afd45e4eb6c7c85480fd215842525c852d7b90771a0af4733a105d4de7b83735e29c29ae820f8858296f5f77736341e4789bafb0b91dc55c43ba939"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserGetModule-5d73dc9b3afd45e4eb6c7c85480fd215842525c852d7b90771a0af4733a105d4de7b83735e29c29ae820f8858296f5f77736341e4789bafb0b91dc55c43ba939"' :
                                        'id="xs-injectables-links-module-UserGetModule-5d73dc9b3afd45e4eb6c7c85480fd215842525c852d7b90771a0af4733a105d4de7b83735e29c29ae820f8858296f5f77736341e4789bafb0b91dc55c43ba939"' }>
                                        <li class="link">
                                            <a href="injectables/UserGetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserGetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' : 'data-bs-target="#xs-injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' :
                                        'id="xs-injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CategoryCreateDto.html" data-type="entity-link" >CategoryCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryCreateResponseDto.html" data-type="entity-link" >CategoryCreateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryDeleteDto.html" data-type="entity-link" >CategoryDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryDeleteResponseDto.html" data-type="entity-link" >CategoryDeleteResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryUpdateDto.html" data-type="entity-link" >CategoryUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryUpdateResponseDto.html" data-type="entity-link" >CategoryUpdateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderCreateDto.html" data-type="entity-link" >OrderCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderCreateResponseDto.html" data-type="entity-link" >OrderCreateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDeleteDto.html" data-type="entity-link" >OrderDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCreateDto.html" data-type="entity-link" >ProductCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCreateResponseDto.html" data-type="entity-link" >ProductCreateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDeleteDto.html" data-type="entity-link" >ProductDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGetDto.html" data-type="entity-link" >ProductGetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGetStatusDto.html" data-type="entity-link" >ProductGetStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductUpdateDto.html" data-type="entity-link" >ProductUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductUpdateResponseDto.html" data-type="entity-link" >ProductUpdateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInResponseDto.html" data-type="entity-link" >SignInResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignRestoreDto.html" data-type="entity-link" >SignRestoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpdateDto.html" data-type="entity-link" >SignUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpResponseDto.html" data-type="entity-link" >SignUpResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubCategoryCreateDto.html" data-type="entity-link" >SubCategoryCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubCategoryCreateResponseDto.html" data-type="entity-link" >SubCategoryCreateResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubCategoryDeleteDto.html" data-type="entity-link" >SubCategoryDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuCategoryUpdateDto.html" data-type="entity-link" >SuCategoryUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuCategoryUpdateDto-1.html" data-type="entity-link" >SuCategoryUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyAccessInterceptor.html" data-type="entity-link" >VerifyAccessInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryCreateRequest.html" data-type="entity-link" >CategoryCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryCreateResponse.html" data-type="entity-link" >CategoryCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryDeleteRequest.html" data-type="entity-link" >CategoryDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryDeleteRequest-1.html" data-type="entity-link" >CategoryDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryDeleteResponse.html" data-type="entity-link" >CategoryDeleteResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryGetResponse.html" data-type="entity-link" >CategoryGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryServiceOptions.html" data-type="entity-link" >CategoryServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryServiceOptions-1.html" data-type="entity-link" >CategoryServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryUpdateRequest.html" data-type="entity-link" >CategoryUpdateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryUpdateResponse.html" data-type="entity-link" >CategoryUpdateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderCreateRequest.html" data-type="entity-link" >OrderCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderCreateResponse.html" data-type="entity-link" >OrderCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderDeleteRequest.html" data-type="entity-link" >OrderDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderDeleteResponse.html" data-type="entity-link" >OrderDeleteResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderGetRequest.html" data-type="entity-link" >OrderGetRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderGetResponse.html" data-type="entity-link" >OrderGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductCreateRequest.html" data-type="entity-link" >ProductCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductCreateResponse.html" data-type="entity-link" >ProductCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductDeleteRequest.html" data-type="entity-link" >ProductDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductDeleteResponse.html" data-type="entity-link" >ProductDeleteResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductGetRequest.html" data-type="entity-link" >ProductGetRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductGetResponse.html" data-type="entity-link" >ProductGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductGetStatusRequest.html" data-type="entity-link" >ProductGetStatusRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductGetStatusResponse.html" data-type="entity-link" >ProductGetStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductUpdateRequest.html" data-type="entity-link" >ProductUpdateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductUpdateResponse.html" data-type="entity-link" >ProductUpdateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInRequest.html" data-type="entity-link" >SignInRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInRequestRestore.html" data-type="entity-link" >SignInRequestRestore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInResponse.html" data-type="entity-link" >SignInResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpRequest.html" data-type="entity-link" >SignUpRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpResponse.html" data-type="entity-link" >SignUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryCreateRequest.html" data-type="entity-link" >SubCategoryCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryCreateResponse.html" data-type="entity-link" >SubCategoryCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryDeleteRequest.html" data-type="entity-link" >SubCategoryDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryDeleteResponse.html" data-type="entity-link" >SubCategoryDeleteResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryDeleteResponse-1.html" data-type="entity-link" >SubCategoryDeleteResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryGetResponse.html" data-type="entity-link" >SubCategoryGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryUpdateRequest.html" data-type="entity-link" >SubCategoryUpdateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubCategoryUpdateResponse.html" data-type="entity-link" >SubCategoryUpdateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SwaggerOptions.html" data-type="entity-link" >SwaggerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserGetRequest.html" data-type="entity-link" >UserGetRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserGetResponse.html" data-type="entity-link" >UserGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserServiceOptions.html" data-type="entity-link" >UserServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserUpdateRequest.html" data-type="entity-link" >UserUpdateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserUpdateResponse.html" data-type="entity-link" >UserUpdateResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});