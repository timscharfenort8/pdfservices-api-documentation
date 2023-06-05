"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5279],{79797:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var n,i=a(87462),o=a(63366),s=(a(15007),a(64983)),p=a(91515),r=["components"],c={},d=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:c},u=p.Z;function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.mdx)(u,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"quickstart-for-pdf-accessibility-auto-tag-api-net"},"Quickstart for PDF Accessibility Auto-Tag API (.NET)"),(0,s.mdx)("p",null,"To get started using Adobe PDF Accessibility Auto-Tag API, let's walk through a simple scenario - taking an input PDF document and running PDF Accessibility Auto-Tag API against it. Once the PDF has been tagged, we'll provide the document with tags and optionally, a report file. In this guide, we will walk you through the complete process for creating a program that will accomplish this task."),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"To complete this guide, you will need:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download"},".NET Core: version 6.0 or above")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".Net SDK")),(0,s.mdx)("li",{parentName:"ul"},"A build tool: Either Visual Studio or .NET Core CLI."),(0,s.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,s.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,s.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,s.mdx)("p",null,"1) To begin, open your browser to ",(0,s.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"},"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.71698113207546%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dda86/shot1.webp 265w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/010e6/shot1.webp 530w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/28773/shot1.png 265w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/a0177/shot1.png 530w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,s.mdx)("p",null,'3) Change the "Choose language" setting to ".Net". '),(0,s.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,s.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.98113207547169%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/dda86/shot2_ga.webp 265w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/010e6/shot2_ga.webp 530w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/668f0/shot2_ga.webp 1060w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/89d57/shot2_ga.webp 1590w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/7bcab/shot2_ga.webp 1878w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/28773/shot2_ga.png 265w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/a0177/shot2_ga.png 530w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/ea60f/shot2_ga.png 1060w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/684d5/shot2_ga.png 1590w","/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/df264/shot2_ga.png 1878w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/5a71f7c4ba37d028385383c777601b8f/ea60f/shot2_ga.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"6) After your credentials are created, they are automatically  downloaded:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.75471698113207%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/dda86/shot3_ga.webp 265w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/010e6/shot3_ga.webp 530w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/668f0/shot3_ga.webp 1060w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/89d57/shot3_ga.webp 1590w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/50ff9/shot3_ga.webp 1604w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/28773/shot3_ga.png 265w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/a0177/shot3_ga.png 530w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/ea60f/shot3_ga.png 1060w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/684d5/shot3_ga.png 1590w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/fe147/shot3_ga.png 1604w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/ea60f/shot3_ga.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,s.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-.NetSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"902px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.54716981132076%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/dda86/shot5.webp 265w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/010e6/shot5.webp 530w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/2096f/shot5.webp 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/28773/shot5.png 265w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/a0177/shot5.png 530w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"2) We need two things from this download. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file. You can find this in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"adobe-DC.PDFServicesSDK.NET.Samples")," folder, inside any of the sample subdirectories, so for example, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"CombinePDF")," folder."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.64150943396226%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/dda86/shot6.webp 265w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/010e6/shot6.webp 530w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/668f0/shot6.webp 1060w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/89d57/shot6.webp 1590w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/7ef82/shot6.webp 1664w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/28773/shot6.png 265w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/a0177/shot6.png 530w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/ea60f/shot6.png 1060w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/684d5/shot6.png 1590w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/7bd25/shot6.png 1664w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/ea60f/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Note that that private key is ",(0,s.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,s.mdx)("p",null,"3) Take these two files and place them in a new directory."),(0,s.mdx)("p",null,"4) In your new directory, create a new file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"AutotagPDF.csproj"),". This file will declare our requirements as well as help define the application we're creating."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n    <PropertyGroup>\n        <OutputType>Exe</OutputType>\n        <TargetFramework>netcoreapp3.1</TargetFramework>\n    </PropertyGroup>\n\n    <ItemGroup>\n        <PackageReference Include="log4net" Version="2.0.12" />\n        <PackageReference Include="Adobe.PDFServicesSDK" Version="3.3.0" />\n    </ItemGroup>\n\n    <ItemGroup>\n        <None Update="pdfservices-api-credentials.json">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="private.key">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="Adobe Accessibility Auto-Tag API Sample.pdf">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="log4net.config">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n    </ItemGroup>\n\n</Project>\n')),(0,s.mdx)("p",null,"Our application will take a PDF, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Accesibility Auto-Tag API Sample.pdf")," (downloadable from ",(0,s.mdx)("a",{href:"/pdfservices-api-documentation/assets/b3b8ca5aad09665ff577cffb35ad98cf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),") and tag its contents. The results will be saved in a given directory ",(0,s.mdx)("inlineCode",{parentName:"p"},"/output/AutotagPDF"),"."),(0,s.mdx)("p",null,"5) In your editor, open the directory where you previously copied the credentials and created the ",(0,s.mdx)("inlineCode",{parentName:"p"},"csproj")," file. Create a new file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Program.cs"),". "),(0,s.mdx)("p",null,"Now you're ready to begin coding."),(0,s.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,s.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"using System;\nusing System.IO;\nusing log4net;\nusing log4net.Config;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing log4net.Repository;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\nusing Adobe.PDFServicesSDK.io.autotag;\nusing Adobe.PDFServicesSDK.pdfops;\n")),(0,s.mdx)("p",null,"2) Now let's define our main class and ",(0,s.mdx)("inlineCode",{parentName:"p"},"Main")," method:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"namespace AutotagPDF\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n        }\n    }\n}\n")),(0,s.mdx)("p",null,"3) Now let's define our input and output:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'String inputPDF = "./Adobe Accessibility Auto-Tag API Sample.pdf";\n\nString outputPath = "./output/AutotagPDF/";\nif(File.Exists(Directory.GetCurrentDirectory() + output))\n{\n    File.Delete(Directory.GetCurrentDirectory() + output);\n}\nString taggedPDF = outputPath + inputPDF +"-tagged-pdf.pdf";\nString taggingReport = outputPath + inputPDF + "-tagging-report.xlsx";\n')),(0,s.mdx)("p",null,"This defines what our output directory will be and optionally deletes it if it already exists. Then we define what PDF will be tagged. (You can download the source we used ",(0,s.mdx)("a",{href:"/pdfservices-api-documentation/assets/b3b8ca5aad09665ff577cffb35ad98cf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),".) In a real application, these values would be typically be dynamic."),(0,s.mdx)("p",null,"4) Next, we setup the SDK to use our credentials."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Initial setup, create credentials instance.\nCredentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n    .Build();\n\n// Create an ExecutionContext using credentials and create a new operation instance.\nExecutionContext executionContext = ExecutionContext.Create(credentials);\n')),(0,s.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,s.mdx)("p",null,"5) Now, let's create the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.CreateNew();\n\n// Provide an input FileRef for the operation.\nFileRef sourceFileRef = FileRef.CreateFromLocalFile(inputPDF);\nautotagPDFOperation.SetInputFile(sourceFileRef);\n\n// Build AutotagPDF options and set them into the operation.\nAutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.AutotagPDFOptionsBuilder()\n    .ShiftHeadings()\n    .GenerateReport()\n    .Build();\n")),(0,s.mdx)("p",null,"This set of code defines what we're doing (an Auto-Tag operation), points to our local file and specifies the input is a PDF, and then defines options for the Auto-Tag call. PDF Accessibility Auto-Tag API has a few different options, but in this example, we're simply asking for a basic tagging operation, which returns the tagged PDF document and an XLSX report of the document."),(0,s.mdx)("p",null,"6) The next code block executes the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Execute the operation.\nFileRef result = autotagPDFOperation.Execute(executionContext);\n\n// Save the result to the specified location.\nresult.GetTaggedPDF().SaveAs(Directory.GetCurrentDirectory() + taggedPDF);\nresult.GetReport().SaveAs(Directory.GetCurrentDirectory() + taggingReport);\n")),(0,s.mdx)("p",null,"This code runs the Auto-Tagging process and then stores the result files in the provided output directory."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"5.660377358490566%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/dda86/shot9_ga.webp 265w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/010e6/shot9_ga.webp 530w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/668f0/shot9_ga.webp 1060w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/89d57/shot9_ga.webp 1590w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/094b8/shot9_ga.webp 2120w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/7e383/shot9_ga.webp 3750w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/28773/shot9_ga.png 265w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/a0177/shot9_ga.png 530w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/ea60f/shot9_ga.png 1060w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/684d5/shot9_ga.png 1590w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/5e85f/shot9_ga.png 2120w","/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/48c3a/shot9_ga.png 3750w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f51d07670303371ad1f3d1220ed75749/ea60f/shot9_ga.png",alt:"Example running in the command line",title:"Example running in the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Here's the complete application (",(0,s.mdx)("inlineCode",{parentName:"p"},"Program.cs"),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'using System;\nusing System.IO;\nusing log4net;\nusing log4net.Config;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing log4net.Repository;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\nusing Adobe.PDFServicesSDK.io.autotag;\nusing Adobe.PDFServicesSDK.pdfops;\n\nnamespace AutotagPDF\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            // Configure the logging.\n            ConfigureLogging();\n            try\n            {\n\n                String inputPDF = "./Adobe Accessibility Auto-Tag API Sample.pdf";\n\n                String outputPath = "./output/AutotagPDF/";\n                if(File.Exists(Directory.GetCurrentDirectory() + output))\n                {\n                    File.Delete(Directory.GetCurrentDirectory() + output);\n                }\n                String taggedPDF = outputPath + inputPDF +"-tagged-pdf.pdf";\n                String taggingReport = outputPath + inputPDF + "-tagging-report.xlsx";\n\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                    .Build();\n\n                // Create an ExecutionContext using credentials and create a new operation instance.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n                AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.CreateNew();\n\n                // Provide an input FileRef for the operation.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(input);\n                autotagPDFOperation.SetInputFile(sourceFileRef);\n\n                // Build AutotagPDF options and set them into the operation.\n                AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.AutotagPDFOptionsBuilder()\n                    .ShiftHeadings()\n                    .GenerateReport()\n                    .Build();\n\n                // Execute the operation.\n                AutotagPDFOutput result = autotagPDFOperation.Execute(executionContext);\n\n                // Save the result to the specified location.\n                result.GetTaggedPDF().SaveAs(Directory.GetCurrentDirectory() + taggedPDF);\n                result.GetReport().SaveAs(Directory.GetCurrentDirectory() + taggingReport);\n\n                Console.Write("Successfully tagged information in PDF.");\n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (ServiceApiException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (SDKException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (IOException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (Exception ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n        }\n\n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n}\n')),(0,s.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,s.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,s.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-accessibility-auto-tag-api-quickstarts-dotnet-index-md-490b82b02f0a55b7615a.js.map