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
                    <a href="index.html" data-type="index-link">blog documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' : 'data-target="#xs-controllers-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' :
                                            'id="xs-controllers-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' : 'data-target="#xs-injectables-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' :
                                        'id="xs-injectables-links-module-AppModule-d84297f47755be3f52e02200f54b0a0dd53f8b00e5698430a33456dcfcaabc3e4f3f03ee8bff4212f46a69e8d483e9f6fb1b99615ea41b5210732839c6af1e53"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' : 'data-target="#xs-controllers-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' :
                                            'id="xs-controllers-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' : 'data-target="#xs-injectables-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' :
                                        'id="xs-injectables-links-module-AuthModule-455613789b7ddb5cf1fa91304c3db73b693b90b5ff89ddfa5d7d2a07c92338ac4a4771dea7106c4b1da47f2352ce7c7dbde545b6c6f2d25d86b531e9915f203f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' : 'data-target="#xs-controllers-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' :
                                            'id="xs-controllers-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' : 'data-target="#xs-injectables-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' :
                                        'id="xs-injectables-links-module-CategoriesModule-2736d3ebc5b546d3182e20619e558a29d9a64848ac41b79d27c03b845fd8a17a25449491314b5c74cf19919a847762948294f4a2ca810981510d7edb9c4ea3c5"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailConfirmationsModule.html" data-type="entity-link" >EmailConfirmationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' : 'data-target="#xs-controllers-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' :
                                            'id="xs-controllers-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' }>
                                            <li class="link">
                                                <a href="controllers/EmailConfirmationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailConfirmationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' : 'data-target="#xs-injectables-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' :
                                        'id="xs-injectables-links-module-EmailConfirmationsModule-2d3808a3f9ea838b693edb77df10c55b90852040a572d8c7b57fbf5b3a70cb0b2b5bced4e14d86d7d7c3875eed8036e1759c4bf4ded5909f5b72d13298ae1bad"' }>
                                        <li class="link">
                                            <a href="injectables/EmailConfirmationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailConfirmationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailsModule.html" data-type="entity-link" >EmailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' : 'data-target="#xs-controllers-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' :
                                            'id="xs-controllers-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' }>
                                            <li class="link">
                                                <a href="controllers/EmailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' : 'data-target="#xs-injectables-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' :
                                        'id="xs-injectables-links-module-EmailsModule-7b0d4a5342ac3ef7f7c4ad6f85691ed5c2410e7300cd4bf6a1726552e3c98a1361aeeba80b18e93635e44039a3d580719d194016ac3c76cba399934b48fa2981"' }>
                                        <li class="link">
                                            <a href="injectables/EmailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' : 'data-target="#xs-controllers-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' :
                                            'id="xs-controllers-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' : 'data-target="#xs-injectables-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' :
                                        'id="xs-injectables-links-module-HealthModule-7ab7e1f28feca6e6576ccd18f009229feb063f3cd52cae425a75400c697562482ee7b246188591cd38468c7e663de4efb1aed86c5e9c603f47b12a66cc6e53f1"' }>
                                        <li class="link">
                                            <a href="injectables/HealthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' : 'data-target="#xs-controllers-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' :
                                            'id="xs-controllers-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' : 'data-target="#xs-injectables-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' :
                                        'id="xs-injectables-links-module-PostsModule-a0843ed224a3630de790648ae4f1d7c5874f27daf68d1b02396e115dfc27d457a398eb7fd97bca87e59626bcb1ccd4c2776e933148eb60f1da24d2e7b5870454"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' : 'data-target="#xs-controllers-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' :
                                            'id="xs-controllers-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' : 'data-target="#xs-injectables-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' :
                                        'id="xs-injectables-links-module-UsersModule-044751b017949db4918009dc2d9c594758260d820ec6c71872114e07f412a4ddfcda2c711759787a4bbfd7e7c406ee38d4b08d41d987983b0a24a3fb8cbc7227"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailConfirmationsController.html" data-type="entity-link" >EmailConfirmationsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailsController.html" data-type="entity-link" >EmailsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmEmailDto.html" data-type="entity-link" >ConfirmEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEmailConfirmationDto.html" data-type="entity-link" >CreateEmailConfirmationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEmailDto.html" data-type="entity-link" >CreateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthDto.html" data-type="entity-link" >CreateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Email.html" data-type="entity-link" >Email</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailConfirmation.html" data-type="entity-link" >EmailConfirmation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Health.html" data-type="entity-link" >Health</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAuthDto.html" data-type="entity-link" >LoginAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenPayloadDto.html" data-type="entity-link" >TokenPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenPayloadResponseDto.html" data-type="entity-link" >TokenPayloadResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEmailConfirmationDto.html" data-type="entity-link" >UpdateEmailConfirmationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEmailDto.html" data-type="entity-link" >UpdateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthDto.html" data-type="entity-link" >UpdateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailConfirmationsService.html" data-type="entity-link" >EmailConfirmationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailsService.html" data-type="entity-link" >EmailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthService.html" data-type="entity-link" >HealthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseIntPipe.html" data-type="entity-link" >ParseIntPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToBooleanPipe.html" data-type="entity-link" >ToBooleanPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});