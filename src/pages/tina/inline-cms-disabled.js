import { withTina, useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm, InlineTextarea } from 'react-tinacms-inline'

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
    return <InlineForm form={form}><p><InlineTextarea name="text" /></p></InlineForm>
}

export default withTina(Index, {
    enabled: false,
    sidebar: true,
    toolbar: true
})