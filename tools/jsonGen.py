import os
import json

def generate_image_json(root_dir="img"):
    # 读取specs.json文件内容
    specs_file = os.path.join(root_dir, "specs.json")
    with open(specs_file, 'r', encoding='utf-8') as f:
        specs = json.load(f)

    # 用来保存生成的json数据
    all_items = {}
    remote_prefix = "https://pancake.zzmelon.com/share/67487ee27fd88/"

    # 遍历img目录下的每个子文件夹
    for folder_name in os.listdir(root_dir):
        folder_path = os.path.join(root_dir, folder_name)

        # 仅处理文件夹
        if os.path.isdir(folder_path):
            # 获取当前文件夹对应的属性
            folder_spec = specs.get(folder_name, {})
            folder_dict = {"now-chr": [ ]}
            folder_items = []
            # 获取文件夹中的所有图片文件
            for file_name in os.listdir(folder_path):
                file_path = os.path.join(folder_path, file_name)

                # 判断是否是图片文件，假设图片文件后缀为.jpg、.png等
                if os.path.isfile(file_path) and file_name.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
                    remote_path = remote_prefix+folder_name+"/"+file_name
                    # 构建每个图片的json对象
                    item = [
                        #file_path,
                        remote_path,
                        file_name[:-4],
                        #"folder": folder_name,
                        folder_spec  # 图片对应的属性来自specs.json
                        #"path": file_path
                    ]
                    #all_items.append(item)
                    folder_items.append(item)
            folder_dict["always"] = folder_items
            #folder_all = {folder_name: folder_dict}
            #all_items.append(folder_all)
            all_items[folder_name] = folder_dict

    # 生成对应的JSON文件
    output_json_file = os.path.join(root_dir, "items.json")
    with open(output_json_file, 'w', encoding='utf-8') as f:
        # 写入json数据
        json.dump(all_items, f, ensure_ascii=False, indent=4)

    print(f"生成的JSON文件已保存到: {output_json_file}")


# 调用函数来生成JSON文件
generate_image_json()