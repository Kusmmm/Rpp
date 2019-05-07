using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace планировщик
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
            

            
        }

        

        private void Button1_Click(object sender, EventArgs e)
        {
            Form1 form = new Form1();
            Panel dynamicPanel = new Panel();
            dynamicPanel.Location = new System.Drawing.Point(40, 210 * Form1.listPanel.Count);
            dynamicPanel.Name = "Panel1";
            dynamicPanel.Size = new System.Drawing.Size(228, 200);
            dynamicPanel.BackColor = Color.LightBlue;
            TextBox textBox1 = new TextBox();
            textBox1.Location = new Point(10, 10);
            textBox1.Text = "I am a TextBox5";
            textBox1.Size = new Size(200, 30);
            CheckBox checkBox1 = new CheckBox();
            checkBox1.Location = new Point(10, 50);
            checkBox1.Text = "Check Me";
            checkBox1.Size = new Size(200, 30);
            dynamicPanel.Controls.Add(textBox1);
            dynamicPanel.Controls.Add(checkBox1);
            Form1.listPanel.Add(dynamicPanel);

           

            this.Hide();
            form.Show();
        }
    }
}
