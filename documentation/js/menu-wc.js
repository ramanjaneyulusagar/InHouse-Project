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
                    <a href="index.html" data-type="index-link">in-house-project documentation</a>
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
                                            'data-target="#components-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' : 'data-target="#xs-components-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' :
                                            'id="xs-components-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' : 'data-target="#xs-injectables-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' :
                                        'id="xs-injectables-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                        <li class="link">
                                            <a href="injectables/InhouseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InhouseService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' : 'data-target="#xs-pipes-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' :
                                            'id="xs-pipes-links-module-AppModule-c05cb5a1d3512bea1883248e20f5c187620ddcb3f4d1801a7e62c8490f0bb1420abd2081ed574c77226487434de82cdf9ba1c5a0a3e421693343b065d9e4cc03"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                    <a href="injectables/InhouseService.html" data-type="entity-link" >InhouseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Applicant.html" data-type="entity-link" >Applicant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUsers.html" data-type="entity-link" >IUsers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/loginform.html" data-type="entity-link" >loginform</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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