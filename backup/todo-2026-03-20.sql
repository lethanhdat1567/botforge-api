-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: botforge
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('02a2eadf-c3e8-41ca-b5bd-69ffe2719643','64659432f2de66928cba8631bc9ed766f0092c33f6522b72e48da5b4b1e83676','2026-03-16 02:20:57.958','20260316022057_refactor_flow_share_like_table',NULL,NULL,'2026-03-16 02:20:57.367',1),('10e1df85-7120-4382-8503-b14a91385e56','36d8888ad2555838c8b72114545a4d9d44cf17f1735a1f17abea017002ded2ae','2026-03-16 01:24:19.368','20260316012419_add_content_field_to_flow_shares_table',NULL,NULL,'2026-03-16 01:24:19.321',1),('14ea2846-95d6-4f8b-8dba-e4b12fbb1362','f3ec8abfa3136f9c211060535a8773061c0c6c323c24f0d76d518cc73f3947bc','2026-03-15 14:33:34.634','20251228044357_update_flow_comment',NULL,NULL,'2026-03-15 14:33:34.439',1),('1800bd50-21c0-47ea-8ab1-c27054f39b35','1ccf2ed58049394f4b2666a4d3adf99fd93a2030a1c6c073b3e69a63934e386f','2026-03-15 14:33:34.393','20251228042231_update_flow_table',NULL,NULL,'2026-03-15 14:33:34.319',1),('1f753d13-a66c-4590-8c40-7b72e3d60283','6e74479828763b37033d4113a9259464b3313b8307410cbe0e2866b385c38b24','2026-03-16 02:58:09.622','20260316025809_update_flow_share_comment',NULL,NULL,'2026-03-16 02:58:09.433',1),('21fca0eb-a716-4c2a-9b5b-a6b95055c8f9','0869653452dae8a3ec5a4817eb303b828ac3b93470231df9f1f82af153f648eb','2026-03-15 14:33:34.438','20251228043021_update_timeout_json_field',NULL,NULL,'2026-03-15 14:33:34.395',1),('22cdb07b-e090-4c27-bc3f-e7a98bd3a732','75d73c745496a8c20d739ddd8213f4277eaf78da774b28b787e05dc5a77b77ec','2026-03-16 14:20:30.940','20260316142030_remove_tags_add_category_post',NULL,NULL,'2026-03-16 14:20:30.576',1),('3725dafa-526e-4e48-8a37-b75922d37959','5c283f69195a4c4765c2dcd7ac47c3ff632e241444481582c117264fe21b7d20','2026-03-15 14:33:35.628','20251231105639_add_folder_table',NULL,NULL,'2026-03-15 14:33:35.504',1),('400af0b3-01b6-4094-90b9-692b242a65cd','c2ec2355f98d1e880df7b3065192d9db11cec41ae2f400d9cb05e1482aa15695','2026-03-15 14:33:34.673','20251228050034_add_shared_template_status',NULL,NULL,'2026-03-15 14:33:34.635',1),('40862f81-9e9e-4356-af75-b6046623401e','07bdb1cf3116e9f6d323fe0c76c997387be901296f66bd6f8edea6eb11650805','2026-03-15 14:33:34.104','20251225132119_fix_token_length',NULL,NULL,'2026-03-15 14:33:34.097',1),('417beade-6eb3-4da9-babb-7ac1fd76625c','8725535271f3ba2b04fb6bef405e476c5bcdc78f905967a6a16b5e31dd93aeb3','2026-03-15 14:33:36.672','20260315130844_update_page_table',NULL,NULL,'2026-03-15 14:33:36.571',1),('4d26bcaf-cc48-437a-bafe-b2d8522ebd7e','bf1304f397e4027e63ce59558fafb88ff5aaa6503d73e1f5603b386117d132cc','2026-03-15 14:33:34.317','20251227084539_update_page_tracking',NULL,NULL,'2026-03-15 14:33:34.284',1),('4e22fdec-834f-4761-a881-56ca193355f2','932503bf857cd1e53b151be99a2fed88cd6bc2190502c2d6ec7eb358408c1a22','2026-03-15 14:33:36.569','20260315124351_update_verification_tex',NULL,NULL,'2026-03-15 14:33:36.536',1),('537861f9-4ee1-4fb6-b1ae-eaf6acafffb5','f8fb46c25fd6b0cbb8baae9a2ebedca03ff9ec9d32deb8174b29c8cff91d42a5','2026-03-18 04:23:47.602','20260318042347_update_flow_record_table',NULL,NULL,'2026-03-18 04:23:47.430',1),('53ab2b8d-8734-4088-94a5-03616e593f91','fd6cc3afa103f670b46b29f1a545eb8898437300e857f2056f35b62548890a0e','2026-03-15 14:33:35.688','20251231151541_update_flow_table',NULL,NULL,'2026-03-15 14:33:35.644',1),('55e52e51-13d1-4483-be9d-49071757c8bf','b895643b70b43b97e51ce1fc84e69e50d3f7ebb562ce577489f14ca5487aa042','2026-03-19 14:22:47.275','20260319142247_update_status_flow_record',NULL,NULL,'2026-03-19 14:22:47.209',1),('5b633608-37c5-4c67-a3ec-0bbb670e3e05','2cefb8b24e11a7116d0eb821ec4546ebab0eeed85dc2fc305a2f8ca27f30fe3b','2026-03-15 14:33:35.804','20260117083852_add_fallback_table',NULL,NULL,'2026-03-15 14:33:35.729',1),('61f3fc80-27e4-4b9e-89f4-bd2eb2360c15','a7ee4ea7c53ec2b7ee875b5b5da252008a02a8f467a70442fa008560cb786a63','2026-03-17 01:42:23.432','20260317014223_update_conversation_table',NULL,NULL,'2026-03-17 01:42:23.289',1),('66789de0-78de-42ef-b39c-7df4032681aa','3bece25758e7df05c518d818928b2f03dcbb75d67fd4c0eae084305555db4493','2026-03-20 09:17:53.791','20260320091753_add_queue_table',NULL,NULL,'2026-03-20 09:17:53.767',1),('68656cc7-c89b-4b7a-bdd3-2473692bc286','a8f99a2dfd8bcce772060b6022f90873ee165a01527fceeb2c4af8a5fe3984e3','2026-03-15 14:33:35.309','20251228061218_update_cascade',NULL,NULL,'2026-03-15 14:33:34.870',1),('68b1fad5-659f-43d0-8894-6df2797c2601','fee6f85c4b4f45848a4de21e1db910c67156ce4500eaa66d02e09f902719bd55','2026-03-15 14:33:36.063','20260205130457_add_guide_table',NULL,NULL,'2026-03-15 14:33:36.045',1),('69beaf46-e9a5-46e3-b08d-2eacb94be41e','d33c19dc00130b1382b01dd6ad3e0b1cbe115b36505d95aaa8efc79843f78a2b','2026-03-15 14:33:36.358','20260315072901_update_user_table',NULL,NULL,'2026-03-15 14:33:36.245',1),('69c1acc1-f330-4127-8dd9-c4d3e9c45db9','2fec591ed910af2060c54ab6f4a59521838a7dcfd0d6dacb6eb09ea14196dd89','2026-03-15 14:33:34.250','20251227082530_update_tracking_table',NULL,NULL,'2026-03-15 14:33:34.204',1),('71e3b701-c08c-4b55-a762-263b47ff039d','3fd2d162b2ec929a7bf1ca13bd081d48456801f01e92bfeee64ec0adb5f83172','2026-03-16 00:43:04.699','20260316004304_update_flow_shares_table',NULL,NULL,'2026-03-16 00:43:04.558',1),('74536243-9203-4b39-bcaa-0b6229a15639','52d5462389ed9cbfa4023249b9a42709d84c385bf60d51e1f82344e39cd7c087','2026-03-15 14:33:36.494','20260315085332_update_verify_table',NULL,NULL,'2026-03-15 14:33:36.411',1),('79a89786-826d-41e1-b117-f9f275cc8589','6f5afeb816036df4d6c58d2e9ce093f2df414a089c51a7aeb84786419365cd3c','2026-03-15 14:33:34.868','20251228055809_update_shared_table',NULL,NULL,'2026-03-15 14:33:34.675',1),('7d345353-e596-4243-a518-df9f8f37d49f','3c3ad0566a5e49583f21d2683e091bd53ac140a9e961519a682aaa5829b808b0','2026-03-17 02:27:52.523','20260317022752_update_message_tabe',NULL,NULL,'2026-03-17 02:27:52.477',1),('825f2b91-607d-47c0-b1d1-3660832f4a35','564a5bc33c46128c1df002f5476b6cb18fce61b9e5fd105de9a81997a5338b52','2026-03-15 14:33:34.203','20251225144622_add_avatar_user_table',NULL,NULL,'2026-03-15 14:33:34.161',1),('8957005b-465d-4142-9bee-4e394a34e166','56a9b6059f03417bb95a9172549c87be03d2c5307f2dcf0037239ef2fc32700d','2026-03-15 14:33:34.283','20251227083157_update_tracking_history',NULL,NULL,'2026-03-15 14:33:34.251',1),('9293a274-96c0-41b3-a452-0c7a0152d9bf','f6e933f792b9870188471a9ba6484239931b27e8b3e2d4a30a386afbd2130a6b','2026-03-18 15:56:27.316','20260318155627_update_wait_flow_record_table',NULL,NULL,'2026-03-18 15:56:27.189',1),('94b451f0-1205-4687-ae7b-9dc5dfd8dcdf','3897250d6acbb117ef6405b5789137c463a2fd6a57a0efd35bbba8686b6203e0','2026-03-17 01:45:12.529','20260317014512_update_enum_conversation_table',NULL,NULL,'2026-03-17 01:45:12.459',1),('95db4619-aed0-4510-a974-96b71476e3c1','f00d105f32431929167a90b60435b755c1f5d0a23b6d526018eaf8d0187b2b0f','2026-03-16 01:35:03.894','20260316013503_rename_flow_share_dowload_table',NULL,NULL,'2026-03-16 01:35:03.534',1),('96f93ece-dbeb-4485-a167-6f5450323e39','a6d4cdb5204c70614e0f522345f021133f201ded21302324deb266fe1bc2cd4e','2026-03-15 14:33:36.535','20260315124036_update_email_verification_table',NULL,NULL,'2026-03-15 14:33:36.503',1),('992ce760-17d3-4999-968b-c945ba0710a6','3f8c3af6cab515e6c860d19a374ff7848cd50b1cb538b5a5dfdeb0cef947a5c1','2026-03-15 14:33:36.244','20260207010430_add_chatlive_atta',NULL,NULL,'2026-03-15 14:33:36.124',1),('9dd13399-2e15-4959-be04-2a025d269466','29b9122b5b90710dc5d8b505dc4c0ac7089d676ef5243ec61d17f8a62405cd41','2026-03-16 15:16:21.649','20260316151621_update_notification_table',NULL,NULL,'2026-03-16 15:16:21.562',1),('9ed49bb2-4288-42ec-992c-47771556dd5d','826175c147afcf3d441bf7eefd6756f7666a62860e4d4e34d3a45635b7aec99f','2026-03-15 14:33:35.342','20251228085948_add_related_notification',NULL,NULL,'2026-03-15 14:33:35.310',1),('9f9ff539-2299-4f1a-9412-de4eb4d2ce24','6ca072006a27753d20db5b93c588e8d7850b91296e862aa6157fe56207c6dfa6','2026-03-15 14:33:35.947','20260123025728_add_pages_table',NULL,NULL,'2026-03-15 14:33:35.805',1),('a3788085-33f6-4596-90db-611441aa91f1','180db31a8608601cff3efe9eca74858ce6a5ed947b39bee17dfde6f8cff07aea','2026-03-15 14:33:34.159','20251225140513_add_forgot_password_table',NULL,NULL,'2026-03-15 14:33:34.105',1),('a6f3103b-e305-4a68-ba62-a1820133af6b','a1e415c11454b9e47245457cd6edadfcb25919ee608de8fd254e03e42f696d45','2026-03-17 01:47:46.295','20260317014746_update_relationship_user_conversation_table',NULL,NULL,'2026-03-17 01:47:46.175',1),('a750d29f-7a91-491f-980c-900aabecc5b8','c04217b734fd598afdfbc7c8eb39c03c2cfeabaf75d26a773d8f725842c2f268','2026-03-15 14:33:34.095','20251225130720_create_tables',NULL,NULL,'2026-03-15 14:33:33.564',1),('b02271c1-1037-4475-8296-42e0c3ea1aab','e1f1a87aef79696531ed43fa4465bbfd396fc7237a9d0f1ff84be0705037a016','2026-03-17 02:20:27.321','20260317022027_update_message_table',NULL,NULL,'2026-03-17 02:20:27.252',1),('b339cc06-808c-4f06-aec5-de953ba0f6d9','b7feee058be7b908fb2b75e0935ffc9a13599975d9eb75f82414b5f0e89075ab','2026-03-15 14:33:35.642','20251231111535_add_unique_folder',NULL,NULL,'2026-03-15 14:33:35.629',1),('b955970f-cfef-469b-ba0e-e9cddc4cea99','dfeaf26e91c5c119a87425944defad356d2d42efc8ce8c254aa9e3f924a419ab','2026-03-15 14:33:36.410','20260315073116_add_verify_user_field',NULL,NULL,'2026-03-15 14:33:36.359',1),('c1c4e177-422d-4ced-bf55-fa05a9295cda','73e01194196045343670c05a8b5768f252ba3dcab037d81cd09b8b3443976aac','2026-03-15 14:37:41.245','20260315143741_update_flow_tabl',NULL,NULL,'2026-03-15 14:37:41.158',1),('c3f3a286-baac-407b-961e-5dde098aae18','ac00d8de189dee3eb096c7ca4c3be170745a1d425ab809271392f2e41862cde7','2026-03-15 14:33:36.044','20260123032121_update_page_table',NULL,NULL,'2026-03-15 14:33:35.949',1),('c81a0662-db00-49e1-a64b-3729c96558f1','f778156a6f8ad2fa1d877ef6df221736ffd90a288ec9de2ad623eb25a568188d','2026-03-15 14:33:35.475','20251230040021_update_avatar_user',NULL,NULL,'2026-03-15 14:33:35.417',1),('cae5631b-1cb0-43a6-ba73-344d8c097ebc','de96735fcdb6d7a3fd59ef2264f72c2718955e6794cc03e57ac3f90c998e8d5e','2026-03-15 14:33:35.383','20251228121645_update_enum_notification',NULL,NULL,'2026-03-15 14:33:35.343',1),('ccc800e2-6f9a-49f7-963f-e1b6bf3af491','9b0139028807fda202dae48383334bec0d03a61042ae7842efa61a8f2e3869d4','2026-03-16 02:45:22.662','20260316024522_update_flow_share_saves_table',NULL,NULL,'2026-03-16 02:45:22.531',1),('cfa32c67-dc86-446d-bcb3-4296525b2d73','353015b35b5d26b75dec819cacf7ebbbd381f69db2887900fc66cc1db8080410','2026-03-15 14:33:36.686','20260315131844_update_unique_page_id',NULL,NULL,'2026-03-15 14:33:36.674',1),('e3d02678-7baa-4b0a-bd81-2fc9ec2bf5ee','f7e2c402708cf7d9729aed3b3dd32fa47542365019294f0b7151a16058113eab','2026-03-18 03:48:27.905','20260318034827_add_flow_record_table',NULL,NULL,'2026-03-18 03:48:27.499',1),('eab3f3c5-c29d-41d7-9166-91316294d9dd','f227b56df3e27b3ec95a760e2d9440a7d5a8021294a0a3fb24ff58d1649a3f49','2026-03-18 09:27:18.025','20260318092717_update_flow_record_table',NULL,NULL,'2026-03-18 09:27:18.005',1),('ed490d98-5cd5-41fc-8f7a-14cf22aae69f','e18a462f37ec36fa9ed68cf1a535850ceecd7c5b4e04ea00fa455e1a50ee7ed7','2026-03-20 09:38:59.567','20260320093859_update_queue_table_name',NULL,NULL,'2026-03-20 09:38:59.538',1),('ee386268-7cbc-45e2-a41f-2ca0b5bffdf3','47847931acf2148ba17a2fad7bf365dd9287988ececb9343509cb0c567b98b74','2026-03-19 04:22:08.628','20260319042208_update_f_low_record_expires_at_table',NULL,NULL,'2026-03-19 04:22:08.583',1),('f072288f-7814-4904-867d-be95c1ba261a','58954b0d04d812c5f30bc4898594ddcfae35c7c387101a96c0f159e06f7d98fe','2026-03-16 13:58:03.590','20260316135802_add_tabs_table_and_update_posts_tabl',NULL,NULL,'2026-03-16 13:58:03.008',1),('f2e40c5b-6266-40c4-b996-e368676a8b84','bd5aa811fbe37eeb57ada59f78b1ad45e274024b9c7c0e6865e932f2f4abd67f','2026-03-15 14:33:35.416','20251228123150_update_notification_table',NULL,NULL,'2026-03-15 14:33:35.384',1),('f46e5a32-9c6e-4253-ba0e-cb8454c07df2','bb4aa4feeb152ccf8833f4b5c6887f151e924a424b7bd6c5673c994b20d7438c','2026-03-15 14:33:36.502','20260315122958_update_enum_verification_table',NULL,NULL,'2026-03-15 14:33:36.495',1),('f9c69582-5402-41ee-8798-a50ffd82dc23','f3d78c5c6165871c0071ae6e1ff48a2fc96285dda0c89e7b4f46c8aaa67a17fe','2026-03-15 14:33:35.728','20260116090924_add_start_flow',NULL,NULL,'2026-03-15 14:33:35.689',1),('fb7fa0f6-3f18-4f07-a9fe-a202317f9ee4','e42f9a3601e58054096ba6b25be9e99f4b72bf3828ea5218593485409d57c32b','2026-03-15 14:33:36.123','20260205132642_add_chat_message_table',NULL,NULL,'2026-03-15 14:33:36.065',1),('ffe9b364-b2db-498c-9599-f88aac1e0f91','3a55ccc3553e91ed9f10f6b527eb6bee4ae8aadf694477afb19ec86b77f03dd4','2026-03-16 01:08:09.564','20260316010809_remove_flow_count_in_flow_share_table',NULL,NULL,'2026-03-16 01:08:09.516',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversation`
--

DROP TABLE IF EXISTS `conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversation` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guestName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('open','closed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Conversation_userId_idx` (`userId`),
  CONSTRAINT `Conversation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversation`
--

LOCK TABLES `conversation` WRITE;
/*!40000 ALTER TABLE `conversation` DISABLE KEYS */;
INSERT INTO `conversation` VALUES ('9eaa423a-7d76-4682-9b06-49e69b211ffc',NULL,NULL,'open','2026-03-17 02:16:14.038','2026-03-17 02:16:14.038');
/*!40000 ALTER TABLE `conversation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_records`
--

DROP TABLE IF EXISTS `flow_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_records` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flow_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current_node_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `variables` json DEFAULT NULL,
  `status` enum('running','pending','processing','completed','cancelled','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'running',
  `last_interaction` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `error_log` text COLLATE utf8mb4_unicode_ci,
  `waiting_for_variable` json DEFAULT NULL,
  `expires_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `flow_records_status_idx` (`status`),
  KEY `flow_records_flow_id_fkey` (`flow_id`),
  KEY `flow_records_page_id_fkey` (`page_id`),
  CONSTRAINT `flow_records_flow_id_fkey` FOREIGN KEY (`flow_id`) REFERENCES `flows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_records_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_records`
--

LOCK TABLES `flow_records` WRITE;
/*!40000 ALTER TABLE `flow_records` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_share_comments`
--

DROP TABLE IF EXISTS `flow_share_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_share_comments` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flow_share_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `flow_share_comments_flow_share_id_fkey` (`flow_share_id`),
  KEY `flow_share_comments_user_id_fkey` (`user_id`),
  KEY `flow_share_comments_parent_id_fkey` (`parent_id`),
  CONSTRAINT `flow_share_comments_flow_share_id_fkey` FOREIGN KEY (`flow_share_id`) REFERENCES `flow_shares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_share_comments_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `flow_share_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_share_comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_share_comments`
--

LOCK TABLES `flow_share_comments` WRITE;
/*!40000 ALTER TABLE `flow_share_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_share_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_share_dowloads`
--

DROP TABLE IF EXISTS `flow_share_dowloads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_share_dowloads` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flow_share_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `flow_share_dowloads_flow_share_id_idx` (`flow_share_id`),
  KEY `flow_share_dowloads_user_id_fkey` (`user_id`),
  CONSTRAINT `flow_share_dowloads_flow_share_id_fkey` FOREIGN KEY (`flow_share_id`) REFERENCES `flow_shares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_share_dowloads_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_share_dowloads`
--

LOCK TABLES `flow_share_dowloads` WRITE;
/*!40000 ALTER TABLE `flow_share_dowloads` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_share_dowloads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_share_likes`
--

DROP TABLE IF EXISTS `flow_share_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_share_likes` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flowShareId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `flow_share_likes_flowShareId_userId_key` (`flowShareId`,`userId`),
  KEY `flow_share_likes_userId_fkey` (`userId`),
  CONSTRAINT `flow_share_likes_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_share_likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_share_likes`
--

LOCK TABLES `flow_share_likes` WRITE;
/*!40000 ALTER TABLE `flow_share_likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_share_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_share_saves`
--

DROP TABLE IF EXISTS `flow_share_saves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_share_saves` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flowShareId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `flow_share_saves_flowShareId_userId_key` (`flowShareId`,`userId`),
  KEY `flow_share_saves_userId_fkey` (`userId`),
  CONSTRAINT `flow_share_saves_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `flow_share_saves_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_share_saves`
--

LOCK TABLES `flow_share_saves` WRITE;
/*!40000 ALTER TABLE `flow_share_saves` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_share_saves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flow_shares`
--

DROP TABLE IF EXISTS `flow_shares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flow_shares` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flow_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `flow_shares_flow_id_fkey` (`flow_id`),
  KEY `flow_shares_user_id_fkey` (`user_id`),
  CONSTRAINT `flow_shares_flow_id_fkey` FOREIGN KEY (`flow_id`) REFERENCES `flows` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `flow_shares_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flow_shares`
--

LOCK TABLES `flow_shares` WRITE;
/*!40000 ALTER TABLE `flow_shares` DISABLE KEYS */;
/*!40000 ALTER TABLE `flow_shares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flows`
--

DROP TABLE IF EXISTS `flows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flows` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `logic_json` json DEFAULT NULL,
  `layout_json` json DEFAULT NULL,
  `timeout_duration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '10s',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `page_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeout_json` json DEFAULT NULL,
  `start_node_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `flows_user_id_fkey` (`user_id`),
  KEY `flows_page_id_fkey` (`page_id`),
  CONSTRAINT `flows_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `flows_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flows`
--

LOCK TABLES `flows` WRITE;
/*!40000 ALTER TABLE `flows` DISABLE KEYS */;
/*!40000 ALTER TABLE `flows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversationId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `content` text COLLATE utf8mb4_unicode_ci,
  `fileUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `revokedAt` datetime(3) DEFAULT NULL,
  `readByAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `readByUser` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `Message_conversationId_idx` (`conversationId`),
  CONSTRAINT `Message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `conversation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('comment','reply','download','flow_done','flow_cancelled','new_user','chat_message') COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `related_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_user_id_fkey` (`user_id`),
  CONSTRAINT `notifications_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_uid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive','isExpired') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `page_access_token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_page_uid_key` (`page_uid`),
  KEY `pages_user_id_fkey` (`user_id`),
  CONSTRAINT `pages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_categories`
--

DROP TABLE IF EXISTS `post_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_categories` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_categories_name_key` (`name`),
  UNIQUE KEY `post_categories_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_categories`
--

LOCK TABLES `post_categories` WRITE;
/*!40000 ALTER TABLE `post_categories` DISABLE KEYS */;
INSERT INTO `post_categories` VALUES ('a24fb8f9-bc00-42b7-91ce-cf4a294c5031','asd','asdasd','2026-03-16 14:44:44.783','2026-03-16 14:44:44.783');
/*!40000 ALTER TABLE `post_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `category_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_slug_key` (`slug`),
  KEY `posts_author_id_fkey` (`author_id`),
  KEY `posts_category_id_fkey` (`category_id`),
  CONSTRAINT `posts_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `post_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queues`
--

DROP TABLE IF EXISTS `queues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queues` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` json NOT NULL,
  `status` enum('pending','processing','completed','error') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queues`
--

LOCK TABLES `queues` WRITE;
/*!40000 ALTER TABLE `queues` DISABLE KEYS */;
INSERT INTO `queues` VALUES ('00f25ffd-1c9d-43c1-b9fd-1e697903f917','verify_email','{\"user\": {\"id\": \"1523319f-fc8c-4a45-9bb9-cc9e4d87eaf8\", \"role\": \"user\", \"email\": \"datlethanh1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$qeBqe3GZV5XP4SnQ0ppole.umtgXHbwpzUkpVaQ9Yqcgfqcl8uZvK\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:06:37.521Z\", \"updatedAt\": \"2026-03-20T10:06:37.521Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"b706b157-0635-4050-ab4c-6b9d2df81159\", \"type\": \"verify_email\", \"email\": \"datlethanh1567@gmail.com\", \"token\": \"3b937e67511ee4213317c70b0802088d27de5e3e3679a73eaecab5c2b3663729\", \"userId\": \"1523319f-fc8c-4a45-9bb9-cc9e4d87eaf8\", \"expiresAt\": \"2026-03-20T12:06:37.542Z\"}}','completed','2026-03-20 10:06:37.557','2026-03-20 10:06:43.032'),('041d5bfe-8085-4824-b656-5d8ae6082e4f','verify_email','{\"user\": {\"id\": \"a183cc1a-d1d3-48f9-a177-c4648a2f9b09\", \"role\": \"user\", \"email\": \"datlethanhaasdsd1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$L1./x4fyCvCxmRFNZsOUyuvhq9G5I1rELHyUNK2gGuRLfbs8vO4/e\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:55:27.156Z\", \"updatedAt\": \"2026-03-20T09:55:27.156Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"23b53f89-73c7-45ae-8490-5edba1bfd38d\", \"type\": \"verify_email\", \"email\": \"datlethanhaasdsd1567@gmail.com\", \"token\": \"30d2463de6626bba1130fa18e1a1bfde9904f6d2038ae1c249d26ea23ea8cee3\", \"userId\": \"a183cc1a-d1d3-48f9-a177-c4648a2f9b09\", \"expiresAt\": \"2026-03-20T11:55:27.167Z\"}}','error','2026-03-20 09:55:27.177','2026-03-20 09:55:47.861'),('042bbbf2-adcc-4d0d-b382-9f6abf1bf7aa','verify_email','{\"user\": {\"id\": \"6338308f-c7bd-4fee-9bf7-d866c7487092\", \"role\": \"user\", \"email\": \"datlethanh1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$o/UBaw5JuIawa044piPRAOpAhTfRc.KZTFq7wYq6iWvpF5YKq3Ka6\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:46:23.907Z\", \"updatedAt\": \"2026-03-20T09:46:23.907Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"5f9b1ad3-7d6e-4fa2-9550-40537d762cc8\", \"type\": \"verify_email\", \"email\": \"datlethanh1567@gmail.com\", \"token\": \"c0f4e067aeb839ae66fa1c482a9859ef7840ba11738b203fb4aa8e49d79762b7\", \"userId\": \"6338308f-c7bd-4fee-9bf7-d866c7487092\", \"expiresAt\": \"2026-03-20T11:46:23.936Z\"}}','error','2026-03-20 09:46:23.952','2026-03-20 09:46:25.350'),('07f5b012-d684-4e53-9fe5-faae4bdcf571','verify_email','{\"user\": {\"id\": \"2a5f72b6-a34a-439e-a280-aa4868409ddc\", \"role\": \"user\", \"email\": \"datlethanh1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$5nm1TxndOl.rJWvteuKluuZeIPEgy0a9Gc9Sv4jpDH3LmqLqnlUh2\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:09:25.522Z\", \"updatedAt\": \"2026-03-20T10:09:25.522Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"9376dc5a-e4b5-45d1-8e90-f2642bfab961\", \"type\": \"verify_email\", \"email\": \"datlethanh1567@gmail.com\", \"token\": \"bd611d9401f0fe0237cabe38a11842020a49eb8750d5910bf01970f59567e32c\", \"userId\": \"2a5f72b6-a34a-439e-a280-aa4868409ddc\", \"expiresAt\": \"2026-03-20T12:09:25.532Z\"}}','completed','2026-03-20 10:09:25.544','2026-03-20 10:09:31.765'),('15d72614-6fe2-45ef-b5f3-e18839868561','verify_email','{\"user\": {\"id\": \"c7b0f921-d831-4d70-8541-9082c5b6cdf5\", \"role\": \"user\", \"email\": \"datlethasdanasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$yAUN174.TuaGSLLOGcMRpeVDFkoeMb5vgK6stlaMronN8tDl7asg2\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:48:18.290Z\", \"updatedAt\": \"2026-03-20T09:48:18.290Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"a89808ad-f5d2-4828-90d7-cdc96294001f\", \"type\": \"verify_email\", \"email\": \"datlethasdanasdh156s7s@gmail.com\", \"token\": \"77261cf1c642814c358938825ff97198e82db9280a956c2815a7a83c6c873b72\", \"userId\": \"c7b0f921-d831-4d70-8541-9082c5b6cdf5\", \"expiresAt\": \"2026-03-20T11:48:18.297Z\"}}','error','2026-03-20 09:48:18.307','2026-03-20 09:48:22.305'),('1e86c746-1698-4e8e-b922-406b2a725caa','verify_email','{\"user\": {\"id\": \"f160f5ba-bf64-41fa-b165-85da268e193c\", \"role\": \"user\", \"email\": \"datlethanhaasasddsd1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$yP0pn9qEYhS8e2Xau00w3uZHQHEBcwIRJfk.m7J3O1KmV1KQytuZC\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:55:53.015Z\", \"updatedAt\": \"2026-03-20T09:55:53.015Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"364d8f53-0af1-47f2-a60f-71687d6d6a85\", \"type\": \"verify_email\", \"email\": \"datlethanhaasasddsd1567@gmail.com\", \"token\": \"892467803afb671f9623fabde64f53d265515edda962f7c2df8db0fa8a2cdd18\", \"userId\": \"f160f5ba-bf64-41fa-b165-85da268e193c\", \"expiresAt\": \"2026-03-20T11:55:53.025Z\"}}','error','2026-03-20 09:55:53.049','2026-03-20 09:55:55.927'),('248c77f5-a9e1-43bc-ad9e-7d2fd6330351','verify_email','{\"user\": {\"id\": \"fbc51cae-8099-4365-a46f-d27b547364dc\", \"role\": \"user\", \"email\": \"lethanhdat1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$EYN6JvmmC6keFttHPhguLOLVd0sqd5L.otewZBT.e4wON/Gc5szj.\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:01:00.656Z\", \"updatedAt\": \"2026-03-20T10:01:00.656Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"77cad8c3-4a83-418c-8ddb-32af768b15c8\", \"type\": \"verify_email\", \"email\": \"lethanhdat1567@gmail.com\", \"token\": \"dab32a180ddcf9443104f36b90261b645998d3ace2ed2761baf400fcd600558e\", \"userId\": \"fbc51cae-8099-4365-a46f-d27b547364dc\", \"expiresAt\": \"2026-03-20T12:01:00.665Z\"}}','error','2026-03-20 10:01:00.678','2026-03-20 10:01:01.836'),('39654aa6-a9c2-4adf-ac0b-f9f1f9061f35','verify_email','{\"user\": {\"id\": \"4795b683-5d72-4738-b914-d50daca54e77\", \"role\": \"user\", \"email\": \"datlethasdanasdasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$JZeh3vI.gb0wziJ2SlUA4OFLzEm1vTi1/82f0XE9WK08c2ltDNZ26\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:48:45.494Z\", \"updatedAt\": \"2026-03-20T09:48:45.494Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"2d7d6fad-eed8-4aab-a641-d7f004aab02d\", \"type\": \"verify_email\", \"email\": \"datlethasdanasdasdh156s7s@gmail.com\", \"token\": \"affdfbfad289e4a322290137ad07edf5adfd56654ddffaa4228b6b1a311f8ff5\", \"userId\": \"4795b683-5d72-4738-b914-d50daca54e77\", \"expiresAt\": \"2026-03-20T11:48:45.521Z\"}}','error','2026-03-20 09:48:45.544','2026-03-20 09:48:46.417'),('3fc110d0-ad3f-4ec2-826f-d004b1a8400b','verify_email','{\"user\": {\"id\": \"cfb1ba35-fa84-43de-9909-874e4d76a586\", \"role\": \"user\", \"email\": \"datlethanh156s7@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$G2l6PdM/1tb5Lg0Kof0CIuVtMtjgAZLX1qMgT8G7/5kl5IUNHbwki\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:46:37.971Z\", \"updatedAt\": \"2026-03-20T09:46:37.971Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"71da618d-66b0-4cfa-b56c-3c6e228c23f4\", \"type\": \"verify_email\", \"email\": \"datlethanh156s7@gmail.com\", \"token\": \"224d36430769f527e34d662404bcc97045f2b4d932e89606e65cf395e053e9a0\", \"userId\": \"cfb1ba35-fa84-43de-9909-874e4d76a586\", \"expiresAt\": \"2026-03-20T11:46:37.979Z\"}}','error','2026-03-20 09:46:38.001','2026-03-20 09:46:41.425'),('4b0af8cb-6f3c-4c0c-96b0-7ede72060a35','verify_email','{\"user\": {\"id\": \"1c239e38-c081-480f-b9fb-14244b6685d4\", \"role\": \"user\", \"email\": \"lethanhdat156sd7@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$pQJtkuHGRTrB2p7k.bDluONjRbc9e.TiqIISzw1WBK5w2kAKHBm2u\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:02:15.111Z\", \"updatedAt\": \"2026-03-20T10:02:15.111Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"0368dc63-bb4c-494c-a027-f05f9b47f228\", \"type\": \"verify_email\", \"email\": \"lethanhdat156sd7@gmail.com\", \"token\": \"a6b219a671dff2ec3a0c6670bdcee6053c39f862894acf038a7ed8d473fdc79b\", \"userId\": \"1c239e38-c081-480f-b9fb-14244b6685d4\", \"expiresAt\": \"2026-03-20T12:02:15.123Z\"}}','error','2026-03-20 10:02:15.156','2026-03-20 10:02:19.182'),('5816f18f-34d4-4bc5-aa99-c36510ec2f2e','verify_email','{\"user\": {\"id\": \"bf613fbf-7527-4cc2-90ed-296ab64c3690\", \"role\": \"user\", \"email\": \"lethanhdat15asd6asasddasd78aass@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$E5zbX/JBYvxoQF/PRxgfr.zCcKi9B902k3OXsYVg/UQkDT/AmpNRW\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:42:08.237Z\", \"updatedAt\": \"2026-03-20T09:42:08.237Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"e16488df-9848-4640-9231-0eee84dc55ba\", \"type\": \"verify_email\", \"email\": \"lethanhdat15asd6asasddasd78aass@gmail.com\", \"token\": \"a34d8d12f46f7964dca6f9d20b784dec06fb6366b1833b1a47031c86f4d87978\", \"userId\": \"bf613fbf-7527-4cc2-90ed-296ab64c3690\", \"expiresAt\": \"2026-03-20T11:42:08.249Z\"}}','error','2026-03-20 09:42:08.260','2026-03-20 09:42:11.244'),('6dc7a379-7989-460d-b2ed-2c6c0e572c64','verify_email','{\"user\": {\"id\": \"e7c3d45a-34df-4809-895f-f8cfe8013757\", \"role\": \"user\", \"email\": \"datlethanhasd1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$Kmiqtc21WPYReAx.bTlItuvrUAJ/sA8LSzGDU0LRSaMyxG9TEZ.ru\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:54:53.627Z\", \"updatedAt\": \"2026-03-20T09:54:53.627Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"d66d01a7-26e0-48ea-a148-87ccb4cf0790\", \"type\": \"verify_email\", \"email\": \"datlethanhasd1567@gmail.com\", \"token\": \"6472807f2e4a5458f0cb686d763ce5b2f36c625e90fe4e38bcd5f6084f84fb70\", \"userId\": \"e7c3d45a-34df-4809-895f-f8cfe8013757\", \"expiresAt\": \"2026-03-20T11:54:53.659Z\"}}','error','2026-03-20 09:54:53.673','2026-03-20 09:55:51.896'),('77cee9bf-4760-47b4-8e13-b2d1c088eded','verify_email','{\"user\": {\"id\": \"a9350bcf-6c53-4033-904e-eeb2df916543\", \"role\": \"user\", \"email\": \"lethanhdat1asd56sd7@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$BZhXz3GXHfCyEb2UiD.kl.6LMzBjx57ZQMElvKlUaxP/BJ8WtUgWa\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:03:29.637Z\", \"updatedAt\": \"2026-03-20T10:03:29.637Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"ae082436-ebab-459f-ba5f-2b0fb8f8bd27\", \"type\": \"verify_email\", \"email\": \"lethanhdat1asd56sd7@gmail.com\", \"token\": \"2712c174f99f8f4f66678e81a8ec309e1549c4dc9ff763537ec16e25ea298b0f\", \"userId\": \"a9350bcf-6c53-4033-904e-eeb2df916543\", \"expiresAt\": \"2026-03-20T12:03:29.655Z\"}}','completed','2026-03-20 10:03:29.676','2026-03-20 10:03:36.170'),('7b382ba7-155b-4409-9dde-0f66356015fb','verify_email','{\"user\": {\"id\": \"733d504a-e536-4f89-8670-3c1830ad1b16\", \"role\": \"user\", \"email\": \"lethanhdat1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$wGm.dK3YNRo9Wazakk5/VeIItoaADRFGKxfUMkpJufjK4fsfu4CLW\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:42:51.964Z\", \"updatedAt\": \"2026-03-20T09:42:51.964Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"22a705f3-6d57-4ef7-bc7b-9dc59f5fe761\", \"type\": \"verify_email\", \"email\": \"lethanhdat1567@gmail.com\", \"token\": \"5dd82025e3cee688a1cc4fec15ac362539d037fbc4cdd5efa974026cdf73c2ca\", \"userId\": \"733d504a-e536-4f89-8670-3c1830ad1b16\", \"expiresAt\": \"2026-03-20T11:42:52.111Z\"}}','error','2026-03-20 09:42:52.207','2026-03-20 09:42:55.359'),('840323f9-10f5-437d-87f3-870923145698','verify_email','{\"user\": {\"id\": \"faf15b93-33cd-41c4-865b-dbd804e6a8f8\", \"role\": \"user\", \"email\": \"datlethanh1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$mpk3CHCB6/WX3GbKXw.V..3/6T2qs94sOpkHNG5Qg8XtDD2yA5uQm\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:45:24.649Z\", \"updatedAt\": \"2026-03-20T09:45:24.649Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"140c77ea-6d06-4270-bf78-78d17711d9d2\", \"type\": \"verify_email\", \"email\": \"datlethanh1567@gmail.com\", \"token\": \"e63b9e88fa8be33befb5af519c21d6efe08f62f621588f831e0d487937c0337c\", \"userId\": \"faf15b93-33cd-41c4-865b-dbd804e6a8f8\", \"expiresAt\": \"2026-03-20T11:45:24.660Z\"}}','error','2026-03-20 09:45:24.679','2026-03-20 09:45:27.813'),('a4f2d309-70ec-452d-a9ff-6818227994e6','verify_email','{\"user\": {\"id\": \"a2d65ae6-2398-418e-98fc-f53854eebcbf\", \"role\": \"user\", \"email\": \"lethanhdat15asd6asd78aass@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$h.deiGiADM9ikWUDALQY1e1vDtlEOjmWcCgmqUYz/NNTroPrAIsSy\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:39:20.776Z\", \"updatedAt\": \"2026-03-20T09:39:20.776Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"9ee33fda-e4b7-4103-84c2-cff4695a8bbd\", \"type\": \"verify_email\", \"email\": \"lethanhdat15asd6asd78aass@gmail.com\", \"token\": \"33ee6d05e93a52d0ad82c49534166962a7ab2482eb8351eafc3598ea55f508f1\", \"userId\": \"a2d65ae6-2398-418e-98fc-f53854eebcbf\", \"expiresAt\": \"2026-03-20T11:39:20.785Z\"}}','error','2026-03-20 09:39:20.810','2026-03-20 09:40:18.876'),('beeae19c-f530-4421-9365-c08f1f2f2c92','verify_email','{\"user\": {\"id\": \"b7447506-e8f1-4a10-bf9e-2285092b6d17\", \"role\": \"user\", \"email\": \"datlethaasdasdsdanasdasdasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$vAuyZxghpStJiCb1vnWa7OCBgxK06wAPAaXhEpUyAAPqPUlguvY6W\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:52:21.337Z\", \"updatedAt\": \"2026-03-20T09:52:21.337Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"2b987173-47fd-4d48-bcf4-837b9570f709\", \"type\": \"verify_email\", \"email\": \"datlethaasdasdsdanasdasdasdh156s7s@gmail.com\", \"token\": \"2047546939506ecb1bfeac47b7b996bafec893c49a12a68657565afc4aab793f\", \"userId\": \"b7447506-e8f1-4a10-bf9e-2285092b6d17\", \"expiresAt\": \"2026-03-20T11:52:21.371Z\"}}','error','2026-03-20 09:52:21.397','2026-03-20 09:52:23.252'),('cc3404ba-1ac8-4828-bbbc-9f79591f5cec','verify_email','{\"user\": {\"id\": \"fb00ed53-26a8-46d3-ad6c-f26c663eb1df\", \"role\": \"user\", \"email\": \"datlethaasdsdanasdasdasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$SWnMgx7SWsYtFzFkgoW8c.VlDR3Kf3tTwB0Pb11TXQwjZJwyMacTW\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:50:48.042Z\", \"updatedAt\": \"2026-03-20T09:50:48.042Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"f54af16d-d4be-4393-b876-8bd285548f29\", \"type\": \"verify_email\", \"email\": \"datlethaasdsdanasdasdasdh156s7s@gmail.com\", \"token\": \"93e9081f3a77740b16df43261a06f04b17640d899a150be2d5234a2f37b020ee\", \"userId\": \"fb00ed53-26a8-46d3-ad6c-f26c663eb1df\", \"expiresAt\": \"2026-03-20T11:50:48.049Z\"}}','error','2026-03-20 09:50:48.064','2026-03-20 09:50:49.148'),('cdb22c3c-df31-4014-bd3d-dba74ea10613','verify_email','{\"user\": {\"id\": \"e7742d68-e022-4cd2-8d1f-c245a4055bab\", \"role\": \"user\", \"email\": \"datlethansh1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$fzXiMuF8sRqbEFvIb7TquOYaFUJAG9kiRG/Bc3W30jRodpW4aON5i\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T10:08:40.659Z\", \"updatedAt\": \"2026-03-20T10:08:40.659Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"dbac2cba-0dc6-42a5-9aba-c41a1030237e\", \"type\": \"verify_email\", \"email\": \"datlethansh1567@gmail.com\", \"token\": \"de42ce4ba4e0924c4ddffbbf130642742080ead818691b54809b8e4d5559328c\", \"userId\": \"e7742d68-e022-4cd2-8d1f-c245a4055bab\", \"expiresAt\": \"2026-03-20T12:08:40.675Z\"}}','processing','2026-03-20 10:08:40.689','2026-03-20 10:08:43.378'),('d10454bf-a8fd-4320-830b-25ec331b634a','verify_email','{\"user\": {\"id\": \"afa07ff4-0d77-4e9f-a4ef-195212a58add\", \"role\": \"user\", \"email\": \"datlethanasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$hA3OIIxp0PiPGVjeNnr5Teiyk2erSUQFE.cNE9ocqIWtcCiK1yKtO\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:48:04.266Z\", \"updatedAt\": \"2026-03-20T09:48:04.266Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"ec3eb5b7-1d44-4ff0-9203-2da42d38c4c3\", \"type\": \"verify_email\", \"email\": \"datlethanasdh156s7s@gmail.com\", \"token\": \"87708998b60c5dd0a1719032d66ce94af510bfef09c372c6f82805b851d9f146\", \"userId\": \"afa07ff4-0d77-4e9f-a4ef-195212a58add\", \"expiresAt\": \"2026-03-20T11:48:04.277Z\"}}','error','2026-03-20 09:48:04.298','2026-03-20 09:48:05.698'),('dce57d04-7246-4dd7-a769-225325704024','verify_email','{\"user\": {\"id\": \"994540c8-da59-4e0c-b834-707bce9774cd\", \"role\": \"user\", \"email\": \"datlethanh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$xt8FL95S5zcaTe4T3CH80./VE3mcbZjzWYFWj6M/PLsqSuaOQBh96\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:47:50.734Z\", \"updatedAt\": \"2026-03-20T09:47:50.734Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"6d60480b-ff97-45ea-a431-2ba97ba4a9e2\", \"type\": \"verify_email\", \"email\": \"datlethanh156s7s@gmail.com\", \"token\": \"eb33df02d7783f31910340d4a448036f27a09fcc605852d6ede6a553e505358f\", \"userId\": \"994540c8-da59-4e0c-b834-707bce9774cd\", \"expiresAt\": \"2026-03-20T11:47:50.781Z\"}}','error','2026-03-20 09:47:50.809','2026-03-20 09:47:53.656'),('dd8100dd-fdd9-4655-8977-c6c0bf673d0a','verify_email','{\"user\": {\"id\": \"f32d7735-4a77-4f5e-96ca-379e0714cfee\", \"role\": \"user\", \"email\": \"datlethaasdsdanasdasdh156s7s@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$hnxDY.t.ZUKgEwMu1JPwVOtr2Kf.M7BwsyM5ZzedFKsxkPz0RNeWq\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:50:32.648Z\", \"updatedAt\": \"2026-03-20T09:50:32.648Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"9a950212-ac31-4c2d-95a5-ff6bf0453579\", \"type\": \"verify_email\", \"email\": \"datlethaasdsdanasdasdh156s7s@gmail.com\", \"token\": \"ddfadb4c65dcde020080342e95aa4157edabf296fad24e4af52ba3fefc8e6cac\", \"userId\": \"f32d7735-4a77-4f5e-96ca-379e0714cfee\", \"expiresAt\": \"2026-03-20T11:50:32.690Z\"}}','error','2026-03-20 09:50:32.711','2026-03-20 09:50:34.742'),('df6e758a-ec6e-4786-b478-30b95b325742','verify_email','{\"user\": {\"id\": \"12db435f-f1d7-4299-a656-3b07d335d9a0\", \"role\": \"user\", \"email\": \"lethanhdat1567@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$0bBuzlI/OQbRxL6C5rLHQORkiHqNPW88aTYdwIM6qYggArY6MzYw2\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:56:26.578Z\", \"updatedAt\": \"2026-03-20T09:56:26.578Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"7ed3d9e1-61cf-4c4f-9477-55b991505daf\", \"type\": \"verify_email\", \"email\": \"lethanhdat1567@gmail.com\", \"token\": \"a49056630cf40aac2eae3be54a89b3b4320f4d4c31e28cfa14afa9e1bbbb78f4\", \"userId\": \"12db435f-f1d7-4299-a656-3b07d335d9a0\", \"expiresAt\": \"2026-03-20T11:56:26.603Z\"}}','error','2026-03-20 09:56:26.623','2026-03-20 09:56:28.012'),('f18f1ea0-e546-4186-85ff-ed699fedb776','verify_email','{\"user\": {\"id\": \"ba5a636d-7bcd-4618-84bc-08de9b8530b2\", \"role\": \"user\", \"email\": \"lethanhdat15asd6asdasd78aass@gmail.com\", \"avatar\": null, \"password\": \"$2b$10$k/.fOd3Huy4eI2LILeyc0u7aeG4PZpXee8axVFr37Fw549vuzdXMm\", \"username\": null, \"verifyAt\": null, \"createdAt\": \"2026-03-20T09:41:08.784Z\", \"updatedAt\": \"2026-03-20T09:41:08.784Z\", \"displayName\": \"aslo\", \"googleProviderId\": null}, \"token\": {\"id\": \"e213af4d-8f1c-4a99-a538-47fe18a6f5c3\", \"type\": \"verify_email\", \"email\": \"lethanhdat15asd6asdasd78aass@gmail.com\", \"token\": \"8223ef774acf3c4da83596d3d1c602178988b8d9386700edb516ac3c69d87ccf\", \"userId\": \"ba5a636d-7bcd-4618-84bc-08de9b8530b2\", \"expiresAt\": \"2026-03-20T11:41:08.791Z\"}}','error','2026-03-20 09:41:08.804','2026-03-20 09:41:11.069');
/*!40000 ALTER TABLE `queues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `avatar` text COLLATE utf8mb4_unicode_ci,
  `google_provider_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verify_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_username_key` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2a5f72b6-a34a-439e-a280-aa4868409ddc',NULL,'aslo','datlethanh1567@gmail.com','$2b$10$5nm1TxndOl.rJWvteuKluuZeIPEgy0a9Gc9Sv4jpDH3LmqLqnlUh2','user','2026-03-20 10:09:25.522','2026-03-20 10:09:25.522',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verification_tokens`
--

DROP TABLE IF EXISTS `verification_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verification_tokens` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('verify_email','reset_password','refresh_token') COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expires_at` datetime(3) NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `verification_tokens_token_key` (`token`),
  KEY `verification_tokens_user_id_fkey` (`user_id`),
  CONSTRAINT `verification_tokens_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification_tokens`
--

LOCK TABLES `verification_tokens` WRITE;
/*!40000 ALTER TABLE `verification_tokens` DISABLE KEYS */;
INSERT INTO `verification_tokens` VALUES ('9376dc5a-e4b5-45d1-8e90-f2642bfab961','verify_email','bd611d9401f0fe0237cabe38a11842020a49eb8750d5910bf01970f59567e32c','datlethanh1567@gmail.com','2026-03-20 12:09:25.532','2a5f72b6-a34a-439e-a280-aa4868409ddc');
/*!40000 ALTER TABLE `verification_tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-20 22:27:50
