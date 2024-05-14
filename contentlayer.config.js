import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remart-gfm'
import { resolve } from 'styled-jsx/css'

const computedFields = {
    slug: {
        type: 'string',
        resolve:(doc)=> '/${doc._raw.flattenedPath}',
    }
}

export const Doc = defineDocumentType(()=>({
    name:'Doc',
    filePathPattern: `complete-nextjs/**/*.mdx`,
    contentType: 'mdx',
    fields:{
        title:{
            type:'string',
            required:true,
        },
        description:{
            type:'string',
        },
        published:{
            type:'boolean',
            default:true,
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentType:[Doc],
    mdx: {
        remartPlugins :[remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,{
                    theme:'github-dark',
                    onVisibleLine(node){
                        if(node.children.length === 0){
                            node.children = [{type: 'text', value:''}]
                        }
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties:{
                        className:['subheading-anchor'],
                        arialLabel:'Link to section',
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties:{
                        className:['subheading-anchor'],
                        arialLabel:'Link to section'
                    },
                },
            ],
        ],
    },
})