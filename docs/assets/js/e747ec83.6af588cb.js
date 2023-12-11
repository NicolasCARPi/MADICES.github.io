"use strict";(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[291],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={},s="Glossary",p={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Datalake, Datawarehouse, Datamesh",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/madices/madices.github.io/edit/main/docs/glossary.md",tags:[],version:"current",lastUpdatedAt:1702306181,formattedLastUpdatedAt:"12/11/2023",frontMatter:{}},d=[{value:"Datalake, Datawarehouse, Datamesh",id:"datalake-datawarehouse-datamesh",children:[],level:2},{value:"Data schema, model, format",id:"data-schema-model-format",children:[],level:2},{value:"Data dictionary",id:"data-dictionary",children:[],level:2},{value:"Dublin Core, DataCite",id:"dublin-core-datacite",children:[],level:2},{value:"ELN",id:"eln",children:[],level:2},{value:"Five star open-data principles",id:"five-star-open-data-principles",children:[],level:2},{value:"LIMS",id:"lims",children:[],level:2},{value:"Markup language",id:"markup-language",children:[],level:2},{value:"Open notebook science",id:"open-notebook-science",children:[],level:2},{value:"Open world assumption",id:"open-world-assumption",children:[],level:2},{value:"Ontology",id:"ontology",children:[],level:2},{value:"RDF",id:"rdf",children:[],level:2},{value:"Relational vs document databases",id:"relational-vs-document-databases",children:[],level:2},{value:"Semantic Web",id:"semantic-web",children:[],level:2},{value:"URI, URL, IRI, GUPRI",id:"uri-url-iri-gupri",children:[],level:2},{value:"UUID",id:"uuid",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("h2",{id:"datalake-datawarehouse-datamesh"},"Datalake, Datawarehouse, Datamesh"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/"},(0,i.kt)("em",{parentName:"a"},"Data lakes"))," are a central place for collecting ",(0,i.kt)("em",{parentName:"p"},"raw")," data from different sources (e.g. unparsed raw spectra)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_warehouse"},(0,i.kt)("em",{parentName:"a"},"Data warehouses")),", in contrast, are a central place to central place for structured data integrated from different sources."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-mesh-principles.html"},(0,i.kt)("em",{parentName:"a"},"Data meshes"))," are, in contrast to centralized datalakes or datawarehouses, a decentralized data architecture in which each domain will offer data as a product. This can be thought of as the data equivalent of microservices that found broad use for scalable software products. You might be interested in ",(0,i.kt)("a",{parentName:"p",href:"https://donnywinston.com/posts/scientific-data-is-fundamentally-distributed/"},"Donny Winston's view on the implications for science"),"."),(0,i.kt)("h2",{id:"data-schema-model-format"},"Data schema, model, format"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Data model")," abstract description of the data structure (the elements and their relationships)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Data schema"),"  describe the data models in a formal language. JSON-LD and XML are common formats for schemas.\xa0\xa0\u0330"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Data format")," serialization of specific content in some dataschema.  "),(0,i.kt)("p",null,"You might also want to give ",(0,i.kt)("a",{parentName:"p",href:"https://donnywinston.com/posts/data-formats-versus-data-models/"},"Donny Winston's view")," a look."),(0,i.kt)("h2",{id:"data-dictionary"},"Data dictionary"),(0,i.kt)("p",null,"A data dictionary describes the detailed definition (format, meaning, relationship, usage) and documentation about each data element in a data model."),(0,i.kt)("h2",{id:"dublin-core-datacite"},"Dublin Core, DataCite"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dublin_Core"},"The Dublin Core Metadata Element Set"),' is a set of 15 elements like "Contributor", "Date", "Format" that should be used for describing data resources. Related is the ',(0,i.kt)("a",{parentName:"p",href:"https://schema.datacite.org/"},"DataCite Metadata Standard"),"."),(0,i.kt)("h2",{id:"eln"},"ELN"),(0,i.kt)("p",null,"Electronic lab notebooks (ELNs) come in different forms. Sometimes, they are merely a revised note-taking app. Some, however, are more tailored for chemistry and provide special fields for reactions, chemicals, and spectra. You can find good overviews on ",(0,i.kt)("a",{parentName:"p",href:"https://zenodo.org/record/4723753"},"this compilation")," from the Harvard Medical school or ",(0,i.kt)("a",{parentName:"p",href:"https://www.data.cam.ac.uk/data-management-guide/electronic-research-notebooks"},"this one")," from the University of Cambridge."),(0,i.kt)("h2",{id:"five-star-open-data-principles"},"Five star open-data principles"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://5stardata.info/en/"},"Deployment principles for open data proposed by Tim Berners-Lee")),(0,i.kt)("p",null,"\u2605 make your stuff available on the Web (whatever format) under an open license"),(0,i.kt)("p",null,"\u2605\u2605 make it available as structured data (e.g., Excel instead of image scan of a table)"),(0,i.kt)("p",null,"\u2605\u2605\u2605 make it available in a non-proprietary open format (e.g., CSV instead of Excel)"),(0,i.kt)("p",null,"\u2605\u2605\u2605\u2605 use URIs to denote things, so that people can point at your stuff"),(0,i.kt)("p",null,"\u2605\u2605\u2605\u2605\u2605 link your data to other data to provide context"),(0,i.kt)("h2",{id:"lims"},"LIMS"),(0,i.kt)("p",null,"Laboratory infrastructure management systems (LIMS) allow tracking and managing samples. Often they allow defining locations at which different material or equipment is stored and can then track the moves and uses of the materials"),(0,i.kt)("h2",{id:"markup-language"},"Markup language"),(0,i.kt)("p",null,"A markup language allows annotating the text to decouple the structure from the content. One example is LaTeX, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\section")," command can be used to define the concept of a section. In the context of data, markup languages such as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/XML"},"Extensible Markup Language (XML)")," are typically used. Indeed, it was built to annotate writing with formatting and metadata.\nThe archetypal example for chemistry is ",(0,i.kt)("a",{parentName:"p",href:"https://www.xml-cml.org/"},"CML"),"."),(0,i.kt)("h2",{id:"open-notebook-science"},"Open notebook science"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/npre.2007.39.1"},"Open notebook science (ONS)")," was popularized by Jean-Claude Bradley, and refers to making ",(0,i.kt)("em",{parentName:"p"},"all"),' primary research outputs openly available as they are recorded. The goal is to minimize the amount of "dark data", e.g., "failed" experiments that would never get published. ',(0,i.kt)("a",{parentName:"p",href:"https://openlabnotebooks.org/"},"openlabnotebooks.org")," collects some efforts."),(0,i.kt)("h2",{id:"open-world-assumption"},"Open world assumption"),(0,i.kt)("p",null,'The open-world assumption is the assumption that a statement might be true irrespective of whether it is known to be true.\nSemantic technologies (e.g., OWL) make the open-world assumption, i.e., the absence of statement does not mean that it is false. Many "classical" databases, in contrast, make the assumption that the absence of a statement means that is false. '),(0,i.kt)("p",null,"Quoting the example from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-world_assumption"},"Wikipedia")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Statement: "Mary" "is a citizen of" "France"\nQuestion: Is Paul a citizen of France?\n\n"Closed world" (for example SQL) answer: No.\n"Open world" answer: Unknown.\n')),(0,i.kt)("h2",{id:"ontology"},"Ontology"),(0,i.kt)("p",null,"Ontologies describe and clarifies the meaning and relation of terms in a formal language."),(0,i.kt)("p",null,"An ontology supports all the following use cases (table stolen from ",(0,i.kt)("a",{parentName:"p",href:"https://cthoyt.com/2020/05/12/building-an-ontology.html"},"Charles Tapley Hoyt"),")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Phrase"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Controlled Vocabulary"),(0,i.kt)("td",{parentName:"tr",align:null},"An enumerated set of entities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dictionary"),(0,i.kt)("td",{parentName:"tr",align:null},"An enumerated set of entities and their definitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Thesaurus"),(0,i.kt)("td",{parentName:"tr",align:null},"An enumerated set of entities and their synonyms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"An enumerated set of entities with one parent for each")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Multi-Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"An enumerated set of entities with one or more parents for each")))),(0,i.kt)("p",null,"You can find more definitions of terms uses in the context of semantic techniques in ",(0,i.kt)("a",{parentName:"p",href:"https://cthoyt.com/2021/10/07/biopragmatics-glossary.html"},"this glossary by Charles Tapley Hoyt"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_Ontology_Language"},"The web ontology language OWL")," can be used to author ontologies. "),(0,i.kt)("h2",{id:"rdf"},"RDF"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Resource_Description_Framework"},"Resource Description Framework (RDF)")," breaks down information into triples of subject, verb, object that are linked in a graph like database which machines can use to explore information (and understand how information is connected). An example for a triple can be substance (subject) inhibits (verb) protein (object) and the same element can also be used in publication (subject) describes (verb) protein. Importantly the parts of the triples are usually (except for values) URIs. SPARQL is a language that can be used to query RDF. "),(0,i.kt)("h2",{id:"relational-vs-document-databases"},"Relational vs document databases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_database"},"Relational databases"),' (e.g., Oracle, PostgreSQL) store table in tables, comparable to spreadsheets. The word relational refers to the fact that the rows within a table are related according to some concept such as "employees" or "chemicals".'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Document-oriented_database"},"Document databases")," (e.g., Mongo), in contrast, store all information for a given object in a single document, and every stored document can be different from every other. Documents can be thought of as objects in programming."),(0,i.kt)("h2",{id:"semantic-web"},"Semantic Web"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/semanticweb/"},"semantic web")," is an extension of the world wide web with metadata that makes data machine-interpretable such that agents can perform themselves actions using data. A key part is ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/DesignIssues/LinkedData.html"},"linked data")," that enables others to find, and use, related data. The principles of linked data are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use URIs as names for things")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use HTTP URIs so that people can look up those names.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When someone looks up a URI, provide useful information, using the standards (RDF*, SPARQL)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Include links to other URIs, so that they can discover more things."))),(0,i.kt)("p",null,"it is ",(0,i.kt)("a",{parentName:"p",href:"https://5stardata.info/en/"},"the fifth star of the five star open-data principles"),"."),(0,i.kt)("h2",{id:"uri-url-iri-gupri"},"URI, URL, IRI, GUPRI"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"URI")," is sequence of a subset of ASCII characters that consists of a string that defines a scheme (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"https"),") followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},":")," and a sequence specifying the authority (e.g.  ",(0,i.kt)("inlineCode",{parentName:"p"},"example.org"),"), the path (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"/some/page"),") and then optionally a query (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"?get=name"),") and optionally fragment (",(0,i.kt)("inlineCode",{parentName:"p"},"#results"),").\nA URL is a special form of URI that is a locator, i.e. it can be resolved to some resource. An IRI is a generalization of URI to unicode glyps."),(0,i.kt)("p",null,"A more detailed explanation on the difference between URLs, URIs, and IRIs can be found ",(0,i.kt)("a",{parentName:"p",href:"https://fusion.cs.uni-jena.de/fusion/2016/11/18/iri-uri-url-urn-and-their-differences/"},"here"),"."),(0,i.kt)("p",null,"GUPRIs (globally unique persistent resolvable identifires) are simply URIs with the additional constraints that they must be globally unique and persistent, typically provided via a centralized registration service like the Digital Object Identifier Foundation (",(0,i.kt)("a",{parentName:"p",href:"https://doi.org"},"DOI")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.dona.net/handle-system"},"Handle"),".\nThese identifiers are a technical solution fulfilling F1 of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.go-fair.org/fair-principles/"},"FAIR Principles"),"."),(0,i.kt)("h2",{id:"uuid"},"UUID"),(0,i.kt)("p",null,"A universally unique identifier (UUID) is a 128-bit number that is, with high probability, globally unique."))}m.isMDXComponent=!0}}]);