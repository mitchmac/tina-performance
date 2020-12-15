import React from 'react'
import { withTina, useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm } from 'react-tinacms-inline'

function DynamicInlineWysiwyg(props){
    const cms = useCMS()
    const [{ InlineWysiwyg }, setEditor] = React.useState({})

    React.useEffect(() => {
        if (!InlineWysiwyg && cms.enabled) {
            import('react-tinacms-editor').then(setEditor)
        }
    }, [cms.enabled])

    if (InlineWysiwyg) {
        return (
            <InlineWysiwyg {...props}/>
        )
    }

    return props.children
}

function Index() {
    const cms = useCMS();
    const formConfig = {
        id: 'editor',
        initialValues: {
            text: 'hello!'
        },
        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'textarea'
            }
        ],
    };

    const [modifiedValues, form] = useForm(formConfig);
    usePlugin(form);
    //@TODO: transform markdown
    return <InlineForm form={form}><p><DynamicInlineWysiwyg name="text" format="markdown">{modifiedValues.text}</DynamicInlineWysiwyg></p></InlineForm>
}

export default withTina(Index, {
    enabled: true,
    sidebar: true,
    toolbar: true
})